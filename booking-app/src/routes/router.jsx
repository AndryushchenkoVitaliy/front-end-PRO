import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import HotelsPage from '../pages/HotelsPage'

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/hotels" element={<HotelsPage />} />
  </Routes>
)