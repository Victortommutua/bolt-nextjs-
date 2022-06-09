import { GlobeIcon, QuestionMarkCircleIcon, SupportIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

function Footer() {
    const socialAccounts = [
        {
          id: 1,
          name: "Facebook",
          imageSrc: "/facebook.svg",
          imageAlt: "Facebook-img",
          href: "https://www.facebook.com/Bolt/",
        },
        {
            id: 2,
            name: "Twitter",
            imageSrc: "/twitter.svg",
            imageAlt: "twitter-img",
            href: "https://twitter.com/Boltapp/",
          },
        {
          id: 3,
          name: "Instagram",
          imageSrc: "/instagram.svg",
          imageAlt: "instagram-img",
          href: "https://www.instagram.com/bolt/",
        },
        {
          id: 4,
          name: "LinkedIn",
          imageSrc: "/linkedin.svg",
          imageAlt: "LinkedIn-img",
          href: "https://www.linkedin.com/company/bolt-eu/",
        },
        {
            id: 5,
            name: "Tiktok",
            imageSrc: "/tiktok.svg",
            imageAlt: "tiktok-img",
            href: "https://vm.tiktok.com/ZMdwm5Y8E/",
          },
      ]
  return (
      <footer className='xl:justify-between'>
          <div className='p-5 flex flex-col'>
              <div className='relative h-10 w-20 cursor-pointer'>
              <Image
                      className=''
                      src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yNjIgMHYzMC4wNzRoLTcuMTM2VjEuNTA0TDU1LjI2MiAwek0zNC45NDUgMzIuOTI0YzEuOTcgMCAzLjU2OCAxLjU4NCAzLjU2OCAzLjUzOCAwIDEuOTU0LTEuNTk4IDMuNTM4LTMuNTY4IDMuNTM4cy0zLjU2OC0xLjU4NC0zLjU2OC0zLjUzOGMwLTEuOTU0IDEuNTk3LTMuNTM4IDMuNTY4LTMuNTM4em0wLTI0LjM4M2M2LjA3NSAwIDExLjAxIDQuODg0IDExLjAxIDEwLjkxOCAwIDYuMDM1LTQuOTM1IDEwLjkyLTExLjAxIDEwLjkyLTYuMDg1IDAtMTEuMDEtNC44ODUtMTEuMDEtMTAuOTIgMC02LjAzNCA0LjkzNS0xMC45MTggMTEuMDEtMTAuOTE4em0wIDE0LjQ1NmMxLjk3MiAwIDMuNTY4LTEuNTgyIDMuNTY4LTMuNTM4IDAtMS45NTUtMS41OTYtMy41MzgtMy41NjgtMy41MzhzLTMuNTY4IDEuNTgzLTMuNTY4IDMuNTM4YzAgMS45NTYgMS41OTYgMy41MzggMy41NjggMy41Mzh6bS0yMi40NDggMGMxLjIzIDAgMi4yMy0uOTkyIDIuMjMtMi4yMWEyLjIyNCAyLjIyNCAwIDAwLTIuMjMtMi4yMTJINy4xNDZ2NC40MjJoNS4zNTF6TTcuMTQ2IDcuMDc3djQuNDIyaDMuOTY0YzEuMjI5IDAgMi4yMy0uOTkzIDIuMjMtMi4yMTJhMi4yMjQgMi4yMjQgMCAwMC0yLjIzLTIuMjFINy4xNDZ6bTExLjkyMiA3LjA5NWMxLjcyNCAxLjY5IDIuNzk1IDQuMDMgMi43ODUgNi42MTQgMCA1LjEzLTQuMTkyIDkuMjg4LTkuMzY2IDkuMjg4SDBWMGgxMS4xYzUuMTczIDAgOS4zNjUgNC4xNTcgOS4zNjUgOS4yODcgMCAxLjc5LS41MDUgMy40Ny0xLjM5NyA0Ljg4NXpNNjguNzQgMTYuMDJoLTMuNTU4djUuNTUzYzAgMS42OC41NDUgMi45MTggMS45NzIgMi45MTguOTIyIDAgMS41OTYtLjIwNiAxLjU5Ni0uMjA2djUuMjA5cy0xLjQ3Ny44ODQtMy40NzkuODg0aC0uMDg5Yy0uMDkgMC0uMTY4LS4wMS0uMjU4LS4wMWgtLjA2OWMtLjA0IDAtLjA5LS4wMS0uMTI5LS4wMS0zLjk4NC0uMjA2LTYuNjktMi42OTItNi42OS03LjAwN1Y1LjA0MWw3LjEzNi0xLjUwM3Y1LjQwNWgzLjU2OHY3LjA3N3oiIGZpbGw9IiMzNEQxODYiLz48L3N2Zz4='
                      alt='logo'
                      layout='fill'
                      objectFit='contain'
              />
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3 p-4'>
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
          <div className='relative h-10 w-20 cursor-pointer'>
          <Image src= 'https://bolt.eu/static/971aaabd768653b568201361a52443d9/en.svg'
              layout='fill'
              objectFit='contain'
              />
          </div>
          </div>
          </div>
          {/* <div className='flex flex-col'>
          <div className='cursor-pointer '>
              <QuestionMarkCircleIcon
              className='h-5 w-5'/>
              <h1 className=''>Help Center</h1>
              </div>
              <div className='cursor-pointer'>
              <GlobeIcon className='h-5 w-5 '/>
              <h1 className=''>English (Kenya)</h1>
              </div>
          </div> */}
          <div className='px-5 grid grid-cols-1 md:grid-cols-3'>
              {/* col 1*/}
              <div className='mt-3'>
                  <p className='font-bold text-xl'>Our products</p>
                  <h1 className='footer'>Ride</h1>
                  <h1 className='footer'>Become a driver</h1>
                  <h1 className='footer'>Business</h1>
                  <h1 className='footer'>Scooters</h1>
                  <h1 className='footer'>Fleets</h1>
                  <h1 className='footer'>Scooter Platform</h1>
                  <h1 className='footer'>Franchise</h1>
                  <h1 className='footer'>Dispatch software</h1>
                  <h1 className='footer'>Request a ride online</h1>
              </div>
              {/* col 2*/}
              <div className='mt-3'>
                  <p className='font-bold text-xl'>Help and support</p>
                  <h1 className='footer'>Help Centre</h1>
                  <h1 className='footer'>Contacts</h1>
                  <h1 className='footer'>Airports</h1>
                  <h1 className='footer'>Cities</h1>
              </div>
              {/* col 3*/}
              <div className='mt-3'>
                  <p className='font-bold text-xl'>About</p>
                  <h1 className='footer'>About Bolt</h1>
                  <h1 className='footer'>Press</h1>
                  <h1 className='footer'>Careers</h1>
                  <h1 className='footer'>Green Plan</h1>
                  <h1 className='footer'>Influencers</h1>
                  <h1 className='footer'>Security</h1>
              </div>
          </div>
          <div className=''>
                        {/* social links*/}
          <div className='flex justify-center space-x-2 p-8'>
          {socialAccounts.map((account)=>(
          <div key={account.id} className='cursor-pointer '>
            <a href={account.href}>
            <Image
            className='rounded-full cursor-pointer border'
            width={50}
            height={50}
            src={account.imageSrc}
            alt={account.imageAlt}
            objectFit= "contain"
            />
            </a>
          </div>
      ))}
          </div>
          <div className='text-center'>
              <h1 className='footer'>Legal</h1>
              <h1 className='footer'>Cookie Declaration</h1>
              <h1 className='text-lg text-gray-500 mt-8 cursor-pointer'>© 2022 Bolt Technology OÜ</h1>
          </div>
          </div>

      </footer>
  )
}

export default Footer
