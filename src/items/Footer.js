import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'

const Footer = () => {
  const[see,setSee]=useState(false)
  return (
    <div className={see?'h-10 bg-slate-200':'h-[70vh] bg-slate-200'}>
      <div className='h-10 flex justify-end px-5 pt-2'>{see?<ChevronDown onClick={()=>setSee(!see)}/>:<ChevronUp onClick={()=>setSee(!see)}/>}</div>
    </div>
  )
}

export default Footer
