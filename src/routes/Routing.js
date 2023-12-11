import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../compo/Home'
import Casual from '../compo/Casual'
import Hoddies from '../compo/Hoddies'
import Oversize from '../compo/Oversize'
import Polo from '../compo/Polo'



const Routing = () => {
  return (
    <div className='w-full mt-20 bg-sky-50'>
      <Routes>
        <Route path='/casual' element={<Home/>}/>
        <Route path='/' element={<Casual/>}/>
        <Route path='/hoddies' element={<Hoddies/>}/>
        <Route path='/oversize' element={<Oversize/>}/>
        <Route path='/polo' element={<Polo/>}/>
       
      </Routes> 
    </div>
  )
}

export default Routing
