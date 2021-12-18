import React, { useEffect, useState } from 'react'
import { CartPageContainer } from './CartPage.styles'

import { Card } from 'components/Card'
import axios from 'axios'

const CartPage = () => {
  const [cards, setCards] = useState([])

  const fetchCartItems = () => {
    axios.get('/cart')
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

  const removeFromCart = (productId: string) => {
    axios.delete(`/cart/${productId}`)
      .then(() => {
        fetchCartItems()
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  const renderCards = () => cards.map((card: any) => (
    <Card
      { ...card }
      onRemove={ removeFromCart }
    />
  ))

  return (
    <CartPageContainer>
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
    </CartPageContainer>
  )
}

export default CartPage
