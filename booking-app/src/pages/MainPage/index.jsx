import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadDestinations } from '../../features/booking/bookingSlice'
import BookingForm from '../../features/booking/BookingForm'

export default function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadDestinations())
  }, [dispatch])

  return (
    <div>
      <h1>Booking</h1>
      <BookingForm />
    </div>
  )
}