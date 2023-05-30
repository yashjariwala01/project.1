import React from 'react'
import Link from "next/link"

const header = () => {
  return (
    <nav className='flex fixed z-10 w-full top-0 justify-between text-white p-3 bg-black gap-x-4'>
      <Link className='mx-2 cursor-pointer' href={'/'}>Persuaide</Link>
      <Link className='mx-2 cursor-pointer' href={'/details'}>Details</Link>
    </nav>
  )
}

export default header
