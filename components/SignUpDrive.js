import React from 'react'

function SignUpDrive() {
  return (
    <div className='flex flex-col md:flex-row md:space-x-10 space-x-5 bg-[#6675FF] p-10 justify-center'>
      <div className='items-center '>
          <h1 className='text-white font-bold text-xl lg:text-2xl'>Earn extra money driving</h1>
          <h2 className='text-white lg:text-xl mt-5 '>Set your own schedule, be your own boss.</h2>
      </div>
      <div className='mt-5'>
          <button className='h-15 w-60 p-3 rounded-full bg-white font-bold 
          cursor-pointer'>
              SIGN UP TO DRIVE
          </button>
      </div>
    </div>
  )
}

export default SignUpDrive
