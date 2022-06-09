import { ArrowCircleLeftIcon, CursorClickIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {Jelly, Waveform, Orbit} from '@uiball/loaders'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete} from '@react-google-maps/api'
const center ={lat:-1.294059 , lng:36.871502};
function Map() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [map , setMap] = useState(/** @type google.maps.Map */ (null))
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const [direction, setDirection] = useState(null);
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBCXSVEMvHDclHn4--bGoKB5oFxorj4OQ0',
        libraries: ['places']
    });
    if(!isLoaded || loadError){
        return (
         <div className='flex w-full items-center justify-center p-10 text-xl'>
        <Jelly className='items-center' size={100} color='#FF4501'/>
      </div>
        )
    }
    const options = {
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER // 'right-center' ,
        },
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl:false,
        fullScreenControl: false,
    }
    console.log('API KEY', process.env.GOOGLE_MAPS_API_KEY);
  return (
      <div className='relative '>
<form className='sticky top-16 z-50 justify-center space-x-3'>
    <div className='p-5  text-center '>
        <Autocomplete>
        <input
        {...register('origin', {required: true})} 
        className='outline-none border-1 bg-gray-200 border-gray-200 rounded-md  p-2 w-full md:w-1/4'
        type="text" 
        placeholder='Origin'
        />
        </Autocomplete>
        <Autocomplete>
        <input 
        {...register('destination', {required: true})}
        className='outline-none border-1 bg-gray-200 rounded-md mt-4 p-2 w-full md:w-1/4'
        type="text" 
        placeholder='Destination'
        />
        </Autocomplete>
    </div>
    <div className='flex justify-center space-x-2 items-center'>
        <button className='bg-[#2eb875] rounded-full text-white font-semibold p-3 text-lg md:text-xl
        cursor-pointer hover:opacity-20'>
            Calculate distance
            </button>
        <XIcon className='h-10 w-10 rounded-full bg-[#2eb875] cursor-pointer hover:opacity-20'/>
        <CursorClickIcon
        onClick={() => map.panTo(center)} 
        className='h-10 w-10 rounded-full bg-[#2eb875] cursor-pointer hover:opacity-20'/>
    </div>
    <div className='justify-center text-center p-4 mt-7'>
        <h1 className='text-lg text-gray-400'>Distance:</h1>
        <h1 className='mt-5 text-lg text-gray-400'>Duration:</h1>
    </div>
</form>
{/* Map */}
<div className='h-screen w-screen absolute top-0'>
    <GoogleMap
    onLoad={map => setMap(map)}
    options={options}
    mapContainerStyle={{width: '100%', height: '100%'}} center={center} zoom={15}>
        <Marker position={center}/>
    </GoogleMap>
</div>
</div>
  )
}

export default Map
