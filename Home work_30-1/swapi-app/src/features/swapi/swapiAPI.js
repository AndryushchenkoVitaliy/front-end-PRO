import axios from 'axios'

export const getPerson = async (id) => {
  const res = await axios.get(`https://swapi.py4e.com/api/people/${id}`)
  return res.data
}