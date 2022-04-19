import { Grid4x4Outlined } from '@mui/icons-material';
import { Avatar,Table, Button, Grid, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Country = () => {
    const navigate = useNavigate();
    const { country } = useParams();
    const [data, setData]: any = useState()

    const fetchCountry = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
            console.log(res.data[0]);
            setData(res.data[0])
        }
        catch (e) {
            console.log(e);
        }
    }

    const handelClick = ()=>{
        navigate(`/weather/${data.capital[0]}`)
    }

    useEffect(() => {
        fetchCountry()
    }, [country])

    return (
        <>
        <h2 style={{textAlign:'center'}}>Country Deatails</h2>
         {data? 
          <Table style={{border:'1px solid black', width:'40rem',marginLeft:'30vw', boxShadow:'5px 10px #888888', backgroundColor:'brisk'}} sx={{mt:10}}>
          <TableRow>
              <TableCell>
              <h4>{country}</h4>
              </TableCell>
              <TableCell>
              <Avatar variant='rounded' src={data.flags.png}/>
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell>
              Capital :
              </TableCell>
              <TableCell>
              {data.capital[0]}
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell>
              Population :
              </TableCell>
              <TableCell>
              {data.population}
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell>
              Latitude :
              </TableCell>
              <TableCell>
              {data.latlng[0]}
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell>
              Longitude :
              </TableCell>
              <TableCell>
              {data.latlng[1]}
              </TableCell>
          </TableRow>
          <TableRow>
              <TableCell></TableCell>
          
           <Button onClick={handelClick} variant='contained'>Capiatl Weather</Button>
       
          </TableRow>
      </Table>
       
        :
        null
        }
        
            
        </>
    )
}

export default Country