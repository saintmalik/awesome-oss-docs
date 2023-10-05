import React from 'react'
import Header from './Header'
import Card from './card'


const Home = () => {
  return (
    <>
    <div className=' bg-bgColor h-screen w-screen py-7 px-40'>
        <Header/>
    </div>
    <div>
      <Card />
    </div>
    </>
  )
}

export default Home