import React, { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places}) => {
  const [type, setType] = useState('restaurant')
  const [rating, setRating] = useState('')
  
  return (
    <div>
      <h4>
        Restuarant, Hotels and Attraction Around you
      </h4>
      <form action="">
        <label htmlFor="">Type
          <select value={type} onChange={(e) => setType(e.target.value)} >
            <option value="restaurant"> Restaurant</option>
            <option value="hotel"> Hotels</option>
            <option value="attractions"> Attractions</option>
            <option value="restaurant"> Restaurant</option>

          </select>
        </label>
      </form>
      <form >
        <label htmlFor="">Rating
          <select value={rating} onChange={(e)=> setRating(e.target.value)} >
            <option value={0}> All</option>
            <option value={3}> Above 3.0</option>
            <option value={4}> Above 4.0</option>
            <option value={4.5}> Above 4.5</option>

          </select>
        </label>
      </form>
      <div>
        {places?.map((place) => (
          <div>
            <PlaceDetails place={place}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List