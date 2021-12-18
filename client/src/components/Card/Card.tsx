import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import {
  CardMain, CardImageContainer, CardDescriptionContainer,
  CardBtnsContainer
} from './Card.styles'

const RemoveBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;

  span {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    font-size: 15px;
    line-height: 25px;
  }
`

function Card (props: any) {
  const {
    id, title, description, image,
    onRemove, onAdd, onEdit } = props

  const handleRemove = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    onRemove(id)
  }
  console.log('onEdit: ', onEdit)
  return (
    <CardMain>
      <CardImageContainer>
        {
          onRemove &&
          <RemoveBtn onClick={ handleRemove }>
            <span>
              X
            </span>
          </RemoveBtn>
        }
        <img src={ image } alt="" />
      </CardImageContainer>
      <CardDescriptionContainer>
        <div>
          { title }
        </div>
        <div>
          { description }
        </div>
      </CardDescriptionContainer>
      <CardBtnsContainer>
        {
          onAdd &&
          <Button variant="outlined" onClick={() => onAdd(id)}>
            Add to cart
          </Button>
        }
        {
          onEdit &&
          <Button variant="outlined" onClick={() => onEdit(id)}>
            Edit
          </Button>
        }
      </CardBtnsContainer>
    </CardMain>
  )
}

export default Card
