//import React from 'react'
import Header from './Header'
import Card from './Card'
import SearchFilter from './searchFilter'

const Home = () => {
  return (
    <>
      <div className='bg-bgColor h-screen w-screen py-7 px-40'>
        <Header />
      </div>
      <div className='w-screen py-7 px-40'>
        <SearchFilter />
      </div>
      <div>
        <Card />
      </div>
    </>
  )
}

export default Home
