import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

const page = () => {
  return (
    <div >
      <main className='container mt-32'>
        <div className='fit flex flex-col w-[75%] m-auto '>
        <div className="firsthalf flex flex-col justify-between gap-11">
            <div className="top flex justify-between">
                <div className="left flex flex-col justify-start">
                    <p className='font-light text-sm'>HDFC BANK</p>
                    <h2 className=' text-blue-500 text-3xl'>Campaigns</h2>
                </div>
                <div className="right">
                    <button className='flex bg-pink-500 text-white my-2 p-2 w-auto rounded-lg font-medium text-[13px] justify-center items-center gap-[10px]'>NEW CAMPAIGN <AiOutlinePlusCircle className="w-[1.5rem] h-7 relative"/></button>
                </div>
            </div>
            <div className="bottom flex justify-between">
                <div className='bottomleft flex items-center gap-4'>
                    <p className='font-bold'> SORT BY :</p>
                    <select className='bg-gray-100' name="" id="" >
                        <option value="my campaigns">MY CAMPAIGNS</option>
                        <option value="team campaigns">TEAM CAMPAIGNS</option>
                    </select>
                </div>
                <div className='bottomright flex'>
                    <input type="text" className='bg-gray-200 p-1 relative left-4 rounded-none' placeholder='     SEARCH'/>
                    <AiOutlineSearch className='relative right-[168px] top-2'/>
                </div>
            </div>
            <hr className='relative bottom-9' />
        </div>
        <div className='sencondhalf flex flex-col mt-10 relative bottom-12'>
            <div className="date mb-3"><p>April 2023</p></div>
            <div className="firstorder flex justify-between p-4 bg-white rounded-lg mb-5">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Regalia Diwali Offer <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>
                <div className="right flex flex-col justify-between">
                    <p>symbol</p>
                    <p>In Progress..</p>
                </div>
            </div>
            <div className="secondorder flex justify-between p-4 bg-white rounded-lg">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Bill Pay Q3 <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>
                <div className="right flex flex-col justify-between">
                    <p>symbol</p>
                    <p>In Progress..</p>
                </div>
            </div>
            <hr className='mb-2 mt-3' />
            <div className="datetwo">MAR 2023</div>
            <div className="thirdorder flex justify-between p-4 bg-white rounded-lg">
                <div className="left flex flex-col gap-y-1">
                    <p className='text-xs font-light'>ACQUISTION: TIME</p>
                    <h2 className='font-bold text-xl'>Regalia Diwali Offer <span className='font-light'>draft</span></h2>
                    <div className="subcategory flex">
                        <p>lastmodified: date</p>
                        <p>created: date</p>
                        <p>creator: name</p>
                    </div>
                </div>
                <div className="right flex flex-col justify-between">
                    <p>symbol</p>
                    <p>In Progress..</p>
                </div>
            </div>
        </div>
        </div>
      </main>
      </div>
  )
}

export default page
