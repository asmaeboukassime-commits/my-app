
import Footer from '../Footer'
import BookingForm from '../BookingForm'
import { fetchAPI } from '../api'

function BookingPage() {
  return (
    <>
    
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Reserve a Table</h1>
        <BookingForm />
      </main>
      <Footer />
    </>
  )
}

export default BookingPage
