'use client'

import jsonData from '@/data/2022recieverdata.json';
import WRScatter from '@/components/wrScatter.js';

const homePage =  () => (
  <main>
    <div>
      <WRScatter/>
    </div>
  </main>
);

export default homePage;