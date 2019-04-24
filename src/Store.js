import storage from 'redux-persist/es/storage'
import { applyMiddleware, compose, createStore } from 'redux'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'

import apiMiddleware from './Middleware';
import createRootReducer from './components/reducers'

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh']
  );

  const rootReducer = createRootReducer(history)

  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [ persistedFilter]
    },
    rootReducer
  )

  const store = createStore(
    reducer, // root reducer with router state
    {},
    compose(
      applyMiddleware(apiMiddleware,
        routerMiddleware(history))
    )
  )

  persistStore(store)

  return store
}