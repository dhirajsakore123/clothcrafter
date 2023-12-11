import React from 'react'
import Navbar from './items/Navbar'
import Routing from './routes/Routing'
import Footer from './items/Footer'

const App = () => {
  return (
    <div className='flex-col gap-2'>
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  )
}

export default App
