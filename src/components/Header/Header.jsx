import React from 'react'
import { Autocomplete } from '@react-google-maps/api'

const Header = () => {
  return (

  <div>
    <header className='bg-blue-600 flex justify-between'>
      <div>
        <h2 className='text-red-500'>Travel Advisor</h2>

      </div>
      <div>
        <input type="text" placeholder='search...' />
      </div>

    </header>

  </div>
  )
}

export default Header