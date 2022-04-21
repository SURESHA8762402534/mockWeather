import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    data:any
    setPage:any
}

const PostTable:React.FC<Props> = ({...props}) => {
    const navigate = useNavigate();

    const handelClick = (item:any)=>{
        alert(JSON.stringify(item))
        navigate('/rawjson',{state:item})
    }

    window.addEventListener('scroll',()=>{
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            props.setPage((prev:any)=>prev+1)
            console.log('scroll called')
        }
    })

    useEffect(()=>{
        console.log(props.data);
    },[props.data])

  return (
    <div>
        {props.data === undefined ? (<><CircularProgress/>Loading...</> ):

        (<Table title='table'>
        <TableHead>
            <TableCell sx={{backgroundColor:'lightyellow'}}>
                <Typography variant='h6'>TITLE</Typography>
            </TableCell>
            <TableCell sx={{backgroundColor:'lightyellow'}} >
                <Typography variant='h6'>URL</Typography>
            </TableCell>
            <TableCell sx={{backgroundColor:'lightyellow'}}>
                <Typography variant='h6'>CREATED_AT</Typography>
            </TableCell>
            <TableCell sx={{backgroundColor:'lightyellow'}}>
                <Typography variant='h6'>AUTHOR</Typography>
            </TableCell>
        </TableHead>
        <TableBody>
            {Array.from(props.data).map((item:any,idx:any)=>{
                return(
                    <TableRow key={idx} onClick={()=>handelClick(item)}>
                        <TableCell>
                            {item.title ? item.title : <i>data not found</i> }
                        </TableCell>
                        <TableCell>
                            {item.url ? item.url : <i>data not found</i> }
                        </TableCell>
                        <TableCell>
                            {item.created_at ? item.created_at : <i>data not found</i> }
                        </TableCell>
                        <TableCell>
                            {item.author ? item.author : <i>data not found</i> }
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
    </Table>)
        }
    </div>
  )
}

export default PostTable