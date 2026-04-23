import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotelsRequest } from './bookingSlice'
import { TextField, Button, MenuItem } from '@mui/material'

import { useEffect } from 'react'
import { loadDestinations } from './bookingSlice'

export default function BookingForm() {
  const dispatch = useDispatch()
  const destinations = useSelector(s => s.booking.destinations)

  useEffect(() => {
    dispatch(loadDestinations())
  }, [dispatch])

  const { handleSubmit, control } = useForm({
    defaultValues: {
      destination: '',
    },
  })

  const onSubmit = (values) => {
    console.log('FORM SUBMIT', values)
    dispatch(fetchHotelsRequest(values))
  }

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="destination"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Destination"
            fullWidth
          >
            {destinations.map(d => (
              <MenuItem key={d.id} value={d.label}>
                {d.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  )
}