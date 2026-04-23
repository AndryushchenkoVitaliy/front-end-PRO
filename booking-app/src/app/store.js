import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'

import rootSaga from './rootSaga'
import bookingReducer from '../features/booking/bookingSlice'

const sagaMiddleware = createSagaMiddleware()

const { routerReducer, routerMiddleware, createReduxHistory } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  })

export const store = configureStore({
  reducer: {
    router: routerReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })
      .concat(routerMiddleware)
      .concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store)