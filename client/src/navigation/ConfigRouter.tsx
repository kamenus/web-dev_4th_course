import { Switch, Route } from 'react-router-dom'
import { paths } from './CONSTANTS'

import HomePage from 'pages/HomePage/HomePage'
import AddProductPage from 'pages/AddProductPage/AddProductPage'
import CartPage from 'pages/CartPage/CartPage'


const ConfigRouter = () => {
  return (
    <Switch>
      <Route exact path={paths.HOME} component={HomePage} />
      <Route exact path={paths.ADD_PRODUCT} component={AddProductPage} />
      <Route exact path={paths.CART} component={CartPage} />

      <Route path="*">
        <div />
      </Route>
    </Switch>
  )
}

export default ConfigRouter
