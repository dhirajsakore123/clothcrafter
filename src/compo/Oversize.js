import React, { useEffect } from 'react'
import Pagegeneric from './Pagegeneric'

const Oversize = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
},[])
  return (
    <>
    <Pagegeneric cat1={"Oversized T-shirts"}/>
    </>
  )
}

export default Oversize
