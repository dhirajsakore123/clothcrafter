import React, { useContext} from 'react'
import { Heart } from 'lucide-react'
// import { ArrowBigUp } from 'lucide-react';
import data from '../data/Data'
import HomeSlider from '../sliders/HomeSlider'

const Pagegeneric = (props) => {
    const value=useContext(data)
    const handelCound=(cost,selling)=>{
        let a=cost-selling
        let discount=Math.floor(a*100/cost)
        return discount
    }
    
    // const handelTop=()=>{
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // }


   

  return (
    <div className='w-full relative min-h-screen '>
        <HomeSlider/>
        <div className='w-full flex flex-wrap min-h-screen '>
             <div className='w-[100%]  py-10 relative md:w-[25%]'>
                <div className=' w-full h-[25%] sticky top-[15%] bg-sky-50 '>
                     <p className='px-2 text-xl text-gray-500'>Mens / Casual T-shirts</p>
                    <p className='px-2 text-base font-semibold text-gray-400'>Showing {value && value.filter(item=>item.cat1===props.cat1).length} Results</p>
                 </div>
            </div>
             <div className='w-[100%] flex justify-evenly gap-y-10 flex-wrap  py-10 md:w-[75%] '>
        {
            value && value.filter(item=>item.cat1=== props.cat1).map((item,index)=>{
                return(
                    <div key={index} className='relative w-[45%] md:w-[38%] h-[280px] md:h-[320px] lg:h-[330px] lg:w-[30%] xl:w-[22%] shadow-md box-border bg-white'>
                        <div className='w-full h-[220px] md:h-[250px] overflow-hidden'>
                           <img className='w-full   hover:scale-110 duration-75' src={item.img1} alt='not found'/>
                        </div>
                        <div  className='w-full  flex-col items-center'>
                                <p className=' text-gray-900 text-[0.7rem] font-serif md:text-[1rem] w-full p-2  '>
                                 {item.cat1}: {item.color.slice(0,5)} <span className=' text-blue-700'>{item.color.length>5?"...":" "}</span> 
                                </p>
                                <hr className='w-[90%]'/>
                            <div className='flex items-end gap-2 pl-2 '>
                                <p className='text-sky-600 font-bold font-serif text-[0.8rem]'>₹{item.cost}</p> 
                                <p className=' text-gray-400 text-sm font-medium line-through font-serif text-[0.8rem]'>₹{item.selling}</p> 
                                <p className='text-sky-600 font-serif text-[0.8rem]'>Off {handelCound(item.cost,item.selling)}%</p>    
                            </div>
                        </div>
                        <div className=' absolute w-9 h-9  grid place-content-center rounded-full bg-slate-400 bg-opacity-50 top-3 right-2'>
                                <Heart color='white' size={20}/>
                        </div>
                    </div>
                )
            })
        }
             </div>

        </div>
        {/* <div className=' sticky right-0  ' onClick={handelTop}><ArrowBigUp size={50} fill='blue' color='blue'/></div> */}
    </div>
  )
}

export default Pagegeneric
