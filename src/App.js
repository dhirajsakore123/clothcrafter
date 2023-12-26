import React, { useEffect, useState } from 'react'
import Navbar from './items/Navbar'
import Routing from './routes/Routing'
import Footer from './items/Footer'
import HashLoader from "react-spinners/HashLoader"
const App = () => {

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
      setTimeout(()=>{
          setLoading(false)
      },1500)
  },[])

  return (
    <div className='flex-col gap-2'>
      {loading?
      <div className=' bg-sky-600 w-full h-[100vh] grid place-content-center' >
        <HashLoader
        color={"white"}
        loading={loading}
        size={50}
      />
      </div>:
      <>
      <Navbar/>
      <Routing/>
      <Footer/>
      </>}
    </div>
  )
}

export default App
