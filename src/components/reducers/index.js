import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cart, * as fromCart from './cart.js'
import auth, * as fromAuth from './auth.js'
import echo, * as fromEcho from './echo.js'

export default (history) => combineReducers({
  router: connectRouter(history),
  cart: cart,
  auth: auth,
  echo: echo
})


export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const userId = state => fromAuth.userId(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const deleteToken = state => fromAuth.deleteToken(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverMessage = state => fromEcho.serverMessage(state.echo)
export const allItems = state => fromCart.allItems(state.cart)
export const cartItems = state => fromCart.cartItems(state.cart)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}