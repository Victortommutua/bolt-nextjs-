import Link from 'next/link'
import React from 'react'

function Features() {
    const features = [
        {
          id: 1,
          imageSrc: '../ride.svg',
          title: 'Get a ride',
          description: 'Bolt offers you a ride in minutes.',
          imageAlt: "ride-img",
        },
            {
          id: 2,
          imageSrc: '../prices.svg',
          title: 'The best prices',
          description: 'We aim to offer the best ride prices in every city. See for yourself!',
          imageAlt: "price-img",
        },
        {
            id: 3,
            imageSrc: '../easy.svg',
            title: 'The best prices',
            description: 'Get wherever you need to go as quickly as possible.',
            imageAlt: "easy-img",
          },
          
    ]
  return (
    <div>
        <div className='flex flex-col p-5 lg:p-10 sm:flex-row justify-between'>
          <Link href='/search'>
        <div className='flex space-x-5 sm:flex-col cursor-pointer hover:bg-gray-200 rounded-md 
        hover:scale-105 transition transform duration-200 ease-out'>
            <img 
            src="../ride.svg" 
            height={100}
            width={100}
            alt="" />
            <div className='mt-5 items-center'>
            <h1 className='font-bold text-lg lg:text-3xl'>Get a ride</h1>
            <h2 className='py-3 text-gray-500'>Bolt offers you a ride in minutes.</h2>
            </div>
        </div>
        </Link>
        <div className='flex space-x-5 sm:flex-col hover:bg-gray-200 hover:scale-105 transition transform duration-200 
    ease-out rounded-md'>
            <img 
            height={100}
            width={100}
            src="../prices.svg" 
            alt="" />
            <div className='mt-5'>
            <h1 className='font-bold text-lg' >The best prices</h1>
            <h2 className='py-3 text-gray-500'>We aim to offer the best ride prices in every city. See for yourself!</h2>
            </div>
        </div>
        <div className='flex space-x-5 sm:flex-col hover:bg-gray-200 hover:scale-105 transition transform duration-200 
    ease-out rounded-md'>
            <img
            height={100}
            width={100} 
            src="../easy.svg" 
            alt="" />
                        <div className='mt-5'>
            <h1 className='font-bold text-lg'>Easy to use</h1>
            <h2 className='py-3 text-gray-500'>Get wherever you need to go as quickly as possible.</h2>
            </div>
        </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Features
