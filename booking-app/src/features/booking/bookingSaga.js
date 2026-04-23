import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'redux-first-history'
import { api } from '../../shared/api/axios'
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  setDestinations,
  loadDestinations,
} from './bookingSlice'

function* fetchHotelsSaga(action) {

  console.log('SAGA START')

  try {
    // const res = yield call(api.post, '/hotels', action.payload)

    const res = yield call(
      api.get,
      `/hotels?city=${action.payload.destination}`
    )

    console.log('DATA:', res.data)

    yield put(fetchHotelsSuccess(res.data))

    yield put(push('/hotels'))
  } catch (e) {
    yield put(fetchHotelsFailure(e.message))
  }
}

function* fetchDestinationsSaga() {
  const res = yield call(api.get, '/destinations')
  yield put(setDestinations(res.data))
}

export default function* bookingSaga() {
  console.log('BOOKING SAGA LOADED')
  yield takeLatest(fetchHotelsRequest.type, fetchHotelsSaga)
  yield takeLatest(loadDestinations.type, fetchDestinationsSaga)
  // yield takeLatest('booking/loadDestinations', fetchDestinationsSaga)
}