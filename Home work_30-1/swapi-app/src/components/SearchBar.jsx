import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('1')

  return (
    <div className="controls">
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => onSearch(id)}>Get info</button>
    </div>
  )
}