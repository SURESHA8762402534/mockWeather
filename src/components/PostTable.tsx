import { CircularProgress, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PostTable = () => {
    const [data, setData]:any = useState([]);
    const [page, setPage]:any = useState(1);
    const [loading, setLoading]:any = useState(false);
    let interval :NodeJS.Timer;
    const navigate = useNavigate();

    const handelPage = ()=>{
        setPage((prev:any)=>prev+1)
    };

    const rawJson = (item:any)=>{
        navigate('/rawjson',{state:item})
    }

    const handelData = async () => {
        setLoading(true)
        try{
            const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`)
            console.log(res);
            setData([...data, ...res.data.hits])
        }
        catch(e){
            console.log('error');
        }
        finally{
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        !loading && handelData()
        console.log(data);
    },[page])

    useEffect(()=>{
        interval = setInterval(handelPage, 10000);
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
                !loading && handelPage()
                console.log('scroll');
            }
        })
    },[window.scrollY])


  return (
    <div>
        {data.length < 1 ? 
        <>
        <CircularProgress/>Loading...
        </>
        :
        <>
        <Table stickyHeader>
            <TableHead>
                <TableCell sx={{textAlign:'center', width:'30vw', backgroundColor:'lightyellow'}}>
                    <Typography variant='h5'>
                        TITLE
                    </Typography>
                </TableCell>
                <TableCell sx={{textAlign:'center', width:'35vw', backgroundColor:'lightyellow'}}>
                    <Typography variant='h5'>
                        URL
                    </Typography>
                </TableCell>
                <TableCell sx={{ width:'25vw', backgroundColor:'lightyellow'}}>
                    <Typography variant='h5'>
                        CREATED_AT
                    </Typography>
                </TableCell>
                <TableCell sx={{ width:'10vw', backgroundColor:'lightyellow'}}>
                    <Typography variant='h5'>
                        AUTHOR
                    </Typography>
                </TableCell>
            </TableHead>
            <TableBody>
                {data.map((item:any,idx:any)=>{
                    return(
                        <TableRow key={idx} data-testid={`rowclick-${idx}`} onClick={()=>rawJson(item)}>
                            <TableCell>
                                {item?.title ? item?.title : (item?.story_title?  item?.story_title: <i>item not fond</i>)}
                            </TableCell>
                            <TableCell>
                                {item?.url ? <a href={item?.url}>{item?.url}</a> : (item?.story_url ? <a href={item?.story_url}>{item?.story_url}</a> :  <i>item not fond</i>) }
                            </TableCell>
                            <TableCell>
                                {item?.created_at ? item?.created_at : <i>item not found</i> }
                            </TableCell>
                            <TableCell>
                                {item?.author ? item?.author : <i>item not fond</i> }
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            <TableFooter>
                <TableCell colSpan={4} sx={{textAlign:'center'}}>
                    {loading && <CircularProgress/>}
                </TableCell>
            </TableFooter>
        </Table>
        </>}
    </div>
  )
}

export default PostTable
