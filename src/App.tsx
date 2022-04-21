import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostTable from './component/PostTable';
import Rawjson from './component/Rawjson';

const App = () => {
	const [data, setData]:any = useState<any>([]);
	const [page, setPage]:any = useState(1)
	let interval:NodeJS.Timer;
	const navigate =useNavigate()

	const fetchData = async()=>{
		try{
			const res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`)
			console.log(res)
			if(!data.includes([...res.data.hits])){
				setData([...data, ...res.data.hits])
			}
		}
		catch(e){
			console.log(e);
		}
	}

	const handelPage = ()=>{
		setPage((prev:any)=>prev+1)
	}

	useEffect(()=>{
		console.log(page);
		fetchData();
		
	},[page])

	useEffect(()=>{
		interval = setInterval(handelPage, 10000)
	},[])

  return (
	<div>
		<Routes>
			<Route path='/' element={<PostTable data={data} setPage={setPage}/> }/>
			<Route path='/rawjson' element={<Rawjson navigate={navigate}/>}/>
		</Routes>
	</div>
  )
}

export default App