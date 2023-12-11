import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Search } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { AlignRight } from 'lucide-react'
import { UserRound } from 'lucide-react'
import logo1 from '../logos/cloth-bear.png'
import logo2 from '../logos/cloth-logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const[cart]=useState(1)
  return (
    <div className='flex-col fixed top-0 w-full z-50'>

       <div className='h-14 bg-sky-600 flex justify-between lg:justify-evenly'>
          <div className='w-[40%]  h-14 flex gap-x-1 items-center'>
            <img src={logo1} alt='not found' className=' h-12  drop-shadow-[-2px_2px_2px_black]  ml-3 md:ml-16'/>
            <img src={logo2} alt='not found' className='h-7   drop-shadow-[-2px_2px_2px_black] mt-3 ml-2'/>
          </div>

          <div className='w-1/2 lg:flex justify-center items-center hidden '>
              <div className='flex justify-between items-center bg-white w-2/3 h-3/4 rounded relative md:w-[90%]'>
                <input type='search' placeholder='search your product' className=' focus:outline-none h-full w-[90%] px-2 rounded'/>
                <div className='grid place-content-center h-full w-[10%] bg-slate-400 rounded-r'><Search/></div> 
              </div>
          </div>

          <div className='w-[50%] flex justify-evenly items-center md:w-[50%] lg:w-[40%] '>
               <div className=' flex justify-center align-middle place-items-center cursor-pointer relative'> 
                   <ShoppingCart color='white' size={22}/>
                   <p className='text-white  pl-1 box-border hidden md:block'>Cart</p>
                    <p className={cart===0?'hidden':' absolute -top-1 -left-2 w-4 h-4 bg-red-600 rounded-full grid place-content-center text-white text-[0.7rem]'}>{cart}</p>
               </div>

            
               <div className='  flex justify-center align-middle place-items-center cursor-pointer'>
              <Heart color='white' size={22}/>
             <p className='text-white pl-1 box-border hidden md:block'>Wishlist</p>
               </div>

               <div className=' flex justify-center align-middle place-items-center cursor-pointer'>
              <UserRound color='white' size={24}/>
              <p className='text-white pl-1 box-border hidden md:block '>profile</p>

               </div>

            

          </div>
       </div>

       <div className='h-10  border-t-2 shadow-bg shadow-gray-200 flex justify-end bg-white '>
           <div className=' w-[98%] flex justify-center gap-x-10 items-center '>
             <div className='h-full w-fit px-3 bg-sky-600 sm:grid place-content-center rotate-12 -skew-y-12 text-white text-xl cursor-pointer hidden'>Sale</div>
              
              <div className='lg:flex w-[80%] justify-around h-full hidden'>
                <div onClick={()=>navigate("/")} className=" text-lg font-medium text-gray-600 grid place-content-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic " >Home</div>
                <div onClick={()=>navigate("/hoddies")} className='  text-lg font-medium text-gray-600 grid place-content-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic '>Hoodies</div>
                <div onClick={()=>navigate("/oversize")} className=' text-lg font-medium text-gray-600 grid place-content-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic '>Oversized T-shirts</div>
                <div onClick={()=>navigate("/polo")} className=' text-lg font-medium text-gray-600 grid place-content-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic '>Polos T-shirts</div>
                <div className=' text-lg font-medium text-gray-600 flex items-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic  '>Theme T-shirts<ChevronDown className='ml-1 mt-2 ' size={20} /></div>
                <div onClick={()=>navigate("/casual")} className=' text-lg font-medium text-gray-600 grid place-content-center cursor-pointer border-b-2 border-white box-content hover:border-sky-600 italic '>
                  Casual T-shirts
                  </div>
              </div>

              <div className='w-full h-full flex justify-between mr-3 lg:hidden md:flex'>
              <div className='flex justify-center items-center w-full'>
                 <div className='flex justify-between items-center bg-white w-[80%] h-[90%] rounded relative border-2'>
                <input type='search' placeholder='search your product' className=' focus:outline-none h-full w-[80%] px-2 rounded'/>
                <div className='grid place-content-center h-full w-[20%] bg-slate-400 rounded-r'><Search size={18}/></div> 
                 </div>
              </div>

                <AlignRight size={30} className=' h-full grid place-content-center'/>
                </div>
           
           </div>
       </div>

    </div>
  )
}

export default Navbar
