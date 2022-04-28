import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostTable from './components/PostTable'
import Rawjson from './components/Rawjson'

const App = () => {
  return (
	<div>
		<Routes>
			<Route path='/' element={<PostTable/>}/>
			<Route path='/rawjson' element={<Rawjson/>}/>
		</Routes>
	</div>
  )
}

export default App