'use client'

import CityChamps from '@/components/graphs/cityChamps';
import NavBar from '@/components/page/navBar';

const homePage = () => (
  <main>
    <div className='grid'>
      <NavBar/>
      <h1 className='top-header'>Long have we debated the question of who&apos;s really titletown.<br/>This data analysis is going to answer that.</h1>
      <CityChamps/>
    </div>
  </main>
);

export default homePage;