import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './Main1'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import BookingPage from './pages/Bookingpage'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<><Hero/><Main/><Footer/></>} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App
