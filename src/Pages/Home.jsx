import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Map from '../components/Map/Map'
import List from '../components/List/List'
import { getPaceData } from '../api'

const Home = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=> {
        setCoordinates({lat: latitude, lng: longitude})
    })
  },[])
  useEffect(() => {
    // console.log(bounds)
    console.log(coordinates, bounds)
    getPaceData(bounds.sw, bounds.ne)
     .then((data)=> {
      console.log(data)
       setPlaces(data)
   }
   
     )
     console.log(places)
  },[bounds, coordinates])
 if(bounds){
  return (
    <div>
        <Header/>
        <List places={places}/>
        <Map setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}/>
    </div>
  )
}
else{
  return(
    <h2>Loading</h2>
  )
}}

export default Home