import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HomePageContainer } from './HomePage.styles'
import { Modal } from '../../components/Modal'
import AddProductPage from 'pages/AddProductPage/AddProductPage'

import { Card } from 'components/Card'

const HomePage = () => {
  const [cards, setCards] = useState([])
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [cardToEdit, setCardToEdit] = useState<any>({})

  const toggleModal = (cardId?: string) => {
    if (isModalShowing) {
      setCardToEdit({})
    } else {
      // @ts-ignore
      const cardToEdit = cards.find(card => card.id === cardId)
      setCardToEdit(cardToEdit)
    }
    setIsModalShowing(!isModalShowing)
  }


  const fetchProducts = () => {
    axios.get('/products')
      .then(({ data }) => {
        const dataToSave = data.data.map((product:any) => ({
          ...product,
          id: product._id,
          key: product._id
        }))

        setCards(dataToSave)
      })
      .catch(err => console.error(err))
  }

  const updateProduct = (productData: any) => {
    const productId = cardToEdit._id

    axios.put(`/product/${productId}`, productData)
      .then(_ => {
        fetchProducts()
      })
      .catch(err => console.error(err))
      .finally(() => { toggleModal() })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const removeProduct = (productId: string) => {
    axios.delete(`/product/${productId}`)
      .then(_ => {
        fetchProducts()
      })
      .catch(err => console.error(err))
  }

  const addToCart = (productId: string) => {
    axios.post(`/cart/${productId}`)
      .catch(err => console.error(err))
  }

  const renderCards = () => cards.map((card: any) => (
    <Card
      { ...card }
      onRemove={ removeProduct }
      onAdd={ addToCart }
      onEdit={ toggleModal }
    />
  ))

  return (
    <HomePageContainer>
      <div
        style={{
          padding: '20px 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        { renderCards() }
      </div>
      <Modal
        show={isModalShowing}
        toggleModal={toggleModal}
      >
        <AddProductPage {...cardToEdit} onSubmit={ updateProduct } />
      </Modal>
    </HomePageContainer>
  )
}

export default HomePage
