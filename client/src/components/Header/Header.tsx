import React from 'react'
import { useHistory } from 'react-router'
import { HeaderMain, HeaderContainer, HeaderButton } from './Header.styles'

import { HeaderMenu } from 'components/HeaderMenu'
import { Search } from 'components/Search'

import { MENU_ITEMS } from '../../constants'
import { paths } from 'navigation/CONSTANTS'

const Header = () => {
  const history = useHistory()
  const handleLogoClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    history.push('/')
  }

  const handleAddClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    history.push(paths.ADD_PRODUCT)
  }

  const handleCartClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    history.push(paths.CART)
  }

  return (
    <HeaderMain>
      <HeaderContainer>
        <HeaderButton onClick={ handleLogoClick } href="#">
          Home
        </HeaderButton>
        <HeaderButton onClick={ handleAddClick } href="#">
          Add product
        </HeaderButton>
        <HeaderButton onClick={ handleCartClick } href="#">
          Cart
        </HeaderButton>
      </HeaderContainer>
    </HeaderMain>
  )
}

export default Header
