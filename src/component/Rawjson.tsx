import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
    navigate:any
}
const Rawjson:React.FC<Props> = ({...props}) => {
    const rawData = useLocation().state;
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(rawData);
        window.scrollTo(0,0)
    },[])

  return (
    <div>
        <Button variant='contained' onClick={()=>props.navigate(-1)}>BACK</Button>
        <Typography variant='h4' sx={{textAlign:'center', m:3}}>RAW JSON DATA</Typography>
    
    <pre>
        {JSON.stringify(rawData,null,3)}
    </pre>

    </div>
  )
}

export default Rawjson