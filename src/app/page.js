'use client'

import jsonData from '@/data/2022recieverdata.json';
import WRScatter from '@/components/graphs/wrScatter.js';
import { RBBubble22, RBBubble23 } from '@/components/graphs/rbBubble.js';
import CityChamps from '@/components/graphs/cityChamps.js'
import NavBar from '@/components/page/navBar';
import GraphLabel from '@/components/page/graphLabel';
import RegularSeasonPlayoffs2023 from '@/components/graphs/regPlayoffs.js';

const homePage = () => (
  <main>
    <div className='grid'>
      <NavBar/>
      <div className='flex place-self-center'>
        <GraphLabel title='2023 WR Tgts vs. Recs' text="
        Delve into the heart of football strategy with this chart, unveiling the intricate relationship between wide receivers' targets and successful catches. Through intuitive circles, players come to life on the chart, their sizes indicating salaries for swift comparisons. Essential for fans, analysts, and teams, this visualization sheds light on receiving skills, providing valuable insights for enthusiasts and data aficionados.
        "/>
        <WRScatter/>
      </div>
      <div className='flex place-self-center'>
        <GraphLabel title='2022 RB Att vs. Yds' text='
        This visualization captures the essence of football performance by depicting the correlation between rushing attempts and yards gained. Each player is represented by circles, their sizes reflecting salaries, enabling quick comparisons. Vital for fans, analysts, and teams, this chart unveils player dynamics, offering intriguing insights for enthusiasts and data aficionados alike.
        '/>
        <RBBubble22/>
      </div>
      <div className='flex place-self-center'>
        <GraphLabel title='2023 RB Att vs. Yds' text='
        Similar to the last graph, this showcases the abilities of different NFL running-backs compared to their compensation.
        '/>
        <RBBubble23/>
      </div>
      <div className='flex place-self-center'>
        <CityChamps/>
      </div>
      <div className='flex place-self-center'>
        <RegularSeasonPlayoffs2023/>
      </div>
    </div>
  </main>
);

export default homePage;