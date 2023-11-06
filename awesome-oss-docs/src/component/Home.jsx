import React from 'react';
import Header from './Header';
import Card from './card';
import SearchFilter from './searchFilter';

const Home = () => {
  return (
    <div className="bg-white min-h-screen py-7 px-4 md:px-10 lg:px-20">
      <Header />
      <div className="container mx-auto">
        <div className="py-7 md:py-10 lg:py-16">
          <SearchFilter />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
