export default function Footer({ onClear, count }) {
    return (
      <footer>
        <span>Requests: {count}</span>
        <button onClick={onClear}>Clear</button>
      </footer>
    )
  }