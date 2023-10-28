import { GoogleMap } from '@react-google-maps/api'
import GoogleMapReact from 'google-map-react'
import React from 'react'

const Map = ({setCoordinates, setBounds, coordinates}) => {

  // const coordinates = {lat: 9.1538, lng: 7.3220}
  return (
    <div className='h-screen w-full'>
      <GoogleMapReact
      bootstrapURLKeys={{key: "AIzaSyAu_h_Ae6hMer-hXuf7gS6Y5oSbOR8rJp4"}}
      defaultCenter={coordinates}
      defaultZoom={14}
      center={coordinates}
      margin={[50, 550, 50, 50]}
      options={""}
      onChange={(e)=> {
        console.log(e)
        setCoordinates({lat: e.center.lat, lng: e.center.lng})
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
      }}
      onChildClick={''}
      >
       
      </GoogleMapReact>
    </div>
  )
}

export default Map