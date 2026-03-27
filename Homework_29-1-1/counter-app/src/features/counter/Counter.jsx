import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

export default function Counter() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={styles.container}>
      <h1>Value: {value}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    border: '1px solid #ccc',
    width: '200px',
    margin: '100px auto',
    borderRadius: '10px',
    background: '#f5f5f5',
  },
}