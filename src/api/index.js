import axios from "axios";
const url= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPaceData = async (sw, ne)=> {
  console.log(sw, ne)
    try{
        const {data: {data}} = await axios.get(url, {
          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'X-RapidAPI-Key': 'db992b733fmsh6fecacc7df3f683p1e1879jsn75816e53d30b',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }})
        return data
    }catch(error){
        console.log(error)
    }
}