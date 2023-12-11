import React, { useEffect } from 'react'
import Pagegeneric from './Pagegeneric'

const Casual = () => {
  useEffect(()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' })
  },[])
  return (
    <>
      <Pagegeneric cat1={"Casual T-shirts"}/>
    </>
  )
}

export default Casual
