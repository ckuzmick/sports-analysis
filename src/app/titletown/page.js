'use client'

import CityChamps from '@/components/graphs/cityChamps';
import NavBar from '@/components/page/navBar';

const homePage = () => (
  <main>
    <div className='grid'>
      <NavBar/>
      <h1 className='top-header'>Long have we debated the question of who&apos;s really titletown.<br/>This data analysis is going to answer that.</h1>
      <CityChamps
        startHeight={500}
      />
      <p className='text-1'>So... Boston and NYC are pretty clearly on top:</p>
      <CityChamps 
        cities={[
          "Boston",
          "New York City"
        ]}
        startHeight={150}
        startYear={1900}
      />
      <p className='text-1'>But let&apos;s zoom in a little:</p>
      <CityChamps 
      startHeight={500}
      startYear={1999.5}
      />
    </div>
  </main>
);

export default homePage;