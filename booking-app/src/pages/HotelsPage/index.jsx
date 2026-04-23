import { useSelector } from 'react-redux'

export default function HotelsPage() {
  const { hotels, loading } = useSelector((state) => state.booking)

  if (loading) return <div>Loading...</div>

  if (!hotels.length) return <div>No hotels found</div>

  return (
    <div>
      <h1>Hotels</h1>

      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <p>{hotel.city}</p>
        </div>
      ))}
    </div>
  )
}