import { Search } from '@mui/icons-material'
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

type Props = {
    navigate:any
}
const Nav:React.FC<Props> = ({...props}) => {
    const [input, setInput] = useState({name:''})
    const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handelSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        console.log(input.name);
        e.preventDefault()
        props.navigate(`/country/${input.name}`)
        setInput({name:''})
    }
  return (
   <>
   <AppBar position='static'>
       <Toolbar>
           <Typography component='div' noWrap sx={{mr:50,flexGrow:1, xs:'none'}}>Weather Report</Typography>
          
              
              <form action=""onSubmit={handelSubmit}>
                   <label htmlFor="input" >Country </label>
                   <input style={{height:'2rem'}} type="text" name='name' id='input' placeholder='enter country' onChange={handelChange} />
                   <button style={{height:'2.4rem'}} type='submit'>Search</button>
               </form>
           
              
       </Toolbar>
   </AppBar>
   </>
  )
}

export default Nav