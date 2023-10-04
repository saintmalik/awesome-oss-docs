import React from 'react'
import { BsDiscord, BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <h1 className='font-bold text-4xl text-white'>Awesome OSS Docs</h1>
        </div>
        <div className='flex gap-4 text-white'>
        <div className='flex items-center gap-2'>
        <BsDiscord className='text-3xl'/>
        <p className='text-lg font-semibold'>Discord</p>
        </div>
        <div className='flex items-center gap-2'>
            <BsTwitter className='text-3xl'/>
            <p className='text-lg font-semibold'>Twitter</p>
        </div>
        <div className='flex items-center gap-2'>
            <BsYoutube className='text-3xl'/>
            <p className='text-lg font-semibold'>Youtube</p>
        </div>
        <div className='flex items-center gap-2'>
            <BsGithub className='text-3xl'/>
            <p className='text-lg font-semibold'>Github</p>
        </div></div>
    </div>
  )
}

export default Header