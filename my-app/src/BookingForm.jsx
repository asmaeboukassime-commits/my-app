import { useState, useReducer } from 'react'
import { fetchAPI } from './api'

export function initializeTimes() {
  const today = new Date()
  return fetchAPI(today)
}

export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date))
}

function BookingForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  )

  return (
    <form className="booking-form">
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          dispatch({
            type: 'UPDATE_TIMES',
            date: e.target.value
          })
        }}
      />

      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Number of Guests"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
    </form>
  )
}

export default BookingForm
