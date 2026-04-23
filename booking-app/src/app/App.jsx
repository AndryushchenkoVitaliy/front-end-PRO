import { Provider } from 'react-redux'
import { store, history } from './store'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { AppRouter } from '../routes/router'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </Provider>
  )
}