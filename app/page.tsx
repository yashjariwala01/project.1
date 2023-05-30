import "../app/globals.css"
import { AiFillPlayCircle } from 'react-icons/ai';
import {MdLiveHelp} from 'react-icons/md';
import Link from "next/link"

export default function Home() {
  return (
    <main >
      <div className="container flex flex-col mt-20 justify-center items-center mx-auto">
        <div className="left w-1/2 mb-5">
          <h1 className="text-4xl text-center">Persuaide</h1>
          <p className="text-xl mt-2 text-center"><span> Instant marketing with the power of </span><br/> <span className="text-pink-400 font-bold">Behavioural science + A.I</span></p>
        </div>
        <div className="right flex flex-col bg-white p-8 rounded-lg shadow-2xl w-2/5">
        <div className=" username flex items-center justify-between">
          <label htmlFor="username"> USERNAME/<br/> EMAIL</label>
          <div>
          <input id="username" className="w-[18rem] my-2 p-3 outline-blue-400 border border-gray-200 rounded-md bg-gray-100" type="email" />
          <p className="font-thin text-sm underline hover:text-pink-500">Forgot Username</p>
          </div>
        </div>
        <div className="password flex items-center justify-between">
          <label htmlFor="password">PASSWORD</label>
          <div>
            <input className="w-[18rem] my-2 p-3 h-12 outline-blue-400 border border-gray-200 rounded-md bg-gray-100" type="password" />
            <p className="font-thin text-sm underline hover:text-pink-500">Forgot Password</p>
          </div>
        </div>
        <div className="keepmelogin flex justify-center ">
        <input id="checkbox" type="checkbox" className=" checked:bg-blue-500 left-2 mt-3 mb-5 relative " />
        <label htmlFor="checkbox" className="relative left-3 top-[6px]">Keep me logged in</label>
        </div>
          <div className="buttons flex justify-between">
          <div className="registerbutton">
          <button className="bg-white border border-black text-black my-2 p-3 w-28 rounded-md font-medium bottom-4"> REGISTER </button>
          <p className="relative  bottom-2 font-light">Create an account</p>
          </div>
          <div className="loginbutton">
          <button className="bg-black border border-black text-white my-2 p-3 w-28 rounded-md font-medium bottom-4"> LOG IN </button> 
          <p>Already a user</p>
          </div>
          </div>
          
        </div>
        <div className="bottom">
        <div className="flex flex-col justify-center items-center ">
                <AiFillPlayCircle className="w-10 h-10 mt-3"/>
                <p>Watch demo</p>
            </div>
        </div>
        <div className="mt-2">
          <p>copyright Persuaide Software Solutions Pvt Ltd 2023</p>
        </div>
        <div className="last self-end relative bottom-10 ">
          <p>need help?</p>
          <MdLiveHelp className="w-10 h-10 relative left-3"/>
        </div>
      </div>
    </main>
  )
}
