import React from 'react'
import Header from './Header'
import Card from './card'
import SearchFilter from './searchFilter'

const Home = () => {
  return (
    <>
      <div className='bg-bgColor h-50 w-screen py-7 px-10'>
        <Header />
      </div>
      <div className='w-screen py-7 px-10'>
        <SearchFilter />
      </div>
      <div>
        <Card />
      </div>
    </>
  )
}

export default Home
