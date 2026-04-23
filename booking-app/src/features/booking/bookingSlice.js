import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hotels: [],
  destinations: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'booking',
  initialState,
  reducers: {

    // fetchHotelsRequest: (state) => {
    //   state.loading = true
    // },

    fetchHotelsRequest: () => {},

    fetchHotelsSuccess: (state, action) => {
      state.loading = false
      state.hotels = action.payload
    },
    fetchHotelsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    setDestinations: (state, action) => {
      state.destinations = action.payload
    },
    loadDestinations: () => {},
  },
})

export const {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  setDestinations,
  loadDestinations,
} = slice.actions

export default slice.reducer