import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPerson } from './swapiAPI'

export const fetchPerson = createAsyncThunk(
  'swapi/fetchPerson',
  async (id, { rejectWithValue }) => {
    try {
      return await getPerson(id)
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message)
    }
  }
)

const initialState = {
  entity: null,
  status: 'idle',
  error: null,
  history: [],
}

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    clearAll: (state) => {
      state.entity = null
      state.history = []
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPerson.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.entity = action.payload
        state.history.unshift(action.payload)
      })
      .addCase(fetchPerson.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { clearAll } = swapiSlice.actions
export default swapiSlice.reducer