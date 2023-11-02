'use client'

import jsonData from '@/data/2022recieverdata.json';
import WRScatter from '@/components/graphs/wrScatter.js';
import RBBubble from '@/components/graphs/rbBubble.js';

const homePage = () => (
  <main>
    <div>
      <WRScatter/>
      <RBBubble/>
    </div>
  </main>
);

export default homePage;