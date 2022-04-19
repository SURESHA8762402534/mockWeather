import { Card, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Weather = () => {
    const [data, setData]:any = useState()
    const {capital} = useParams()

    const fetchWeather = async()=>{
        try{
            const res = await axios.get(`http://api.weatherstack.com/current?access_key=d81381e7f65ac20a3115570356e0a315&query=${capital}`)
       console.log(res.data.current);
       setData(res.data.current)
        }
        catch(e){
            console.log(e);
        }
    }

useEffect(()=>{
    fetchWeather()
},[capital])

  return (
    
    <>
    <h3 style={{textAlign:'center'}}>Weather Details of {capital}</h3>
    {data ? 
    <Card sx={{p:4,ml:60, mt:4}} style={{width:'30vw', boxShadow:'5px 10px #888888'}}>
    <div style={{float:'left'}}>
        <Typography variant='h5'>
            Capital : {capital}
        </Typography>
        <Typography variant='h5'>
            Temparature : {data.temperature}<sup>0</sup> Celcius
        </Typography>
        <Typography variant='h5'>
            Wind Speed : {data.wind_speed} km/hr
        </Typography>
        <Typography variant='h5'>
            Precip : {data.precip}
        </Typography>
    </div>
    <div style={{float:'right'}}>
        <img src={data.weather_icons[0]}/>
    </div>
</Card>
:
null
}
    </>
  )
}

export default Weather