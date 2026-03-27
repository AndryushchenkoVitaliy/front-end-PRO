import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson, clearAll } from './features/swapi/swapiSlice'
import {
  selectEntity,
  selectStatus,
  selectHistory,
} from './features/swapi/swapiSelectors'

import SearchBar from './components/SearchBar'
import ResultViewer from './components/ResultViewer'
import Footer from './components/Footer'

export default function App() {
  const dispatch = useDispatch()

  const data = useSelector(selectEntity)
  const status = useSelector(selectStatus)
  const history = useSelector(selectHistory)

  return (
    <div className="container">
      <h1>SWAPI</h1>

      <SearchBar onSearch={(id) => dispatch(fetchPerson(id))} />

      <div className="result">
        <ResultViewer data={data} status={status} />
      </div>

      <Footer
        count={history.length}
        onClear={() => dispatch(clearAll())}
      />
    </div>
  )
}