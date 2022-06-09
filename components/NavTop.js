import { ArrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavTop() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='bg-[#2eb875] flex-1'>
          <h1 className='text-5xl lg:text-7xl p-5 md:p-20 text-white font-extrabold text-center md:text-left'>
              The fast, affordable way to ride.
          </h1>
          <h2 className='text-center  mt-10 text-white text-lg '>Download the Bolt app</h2>
          <div className='flex justify-center  space-x-3 mt-5'>
          <div className='relative h-10 w-20 cursor-pointer'>
              <Image 
              src='https://bolt.eu/static/8de0c47bd0804c7387b44eb24f7af748/en.svg'
              layout='fill'
              objectFit='contain'
              />
          </div>
          <div className='relative h-10 w-20 cursor-pointer'>
          <Image src= 'https://bolt.eu/static/fc711801f3c70175cf946b523b97ac30/en.svg'
              layout='fill'
              objectFit='contain'
              />
          </div>
          </div>
          <div className='flex mt-items-center  justify-center text-white 
          space-x-3 text-sm mt-20 cursor-pointer'>
            <Link href='/search'>
            <h2 className='font-bold '>REQUEST A RIDE ONLINE </h2>
            </Link>
          
          <ArrowRightIcon
          className='h-5 w-7'
          />
          </div>
      </div>
      {/* */}
      <div className='flex flex-1'>
          <img 
          className=''
          src="./getride.webp"
          alt="" 
          />
      </div>
    </div>
  )
}

export default NavTop
