'use client'

import jsonData from '@/data/2022recieverdata.json';
import WRScatter from '@/components/graphs/wrScatter.js';
import { RBBubble22, RBBubble23 } from '@/components/graphs/rbBubble.js';
import CityChamps from '@/components/graphs/cityChamps.js'
import NavBar from '@/components/page/navBar';
import GraphLabel from '@/components/page/graphLabel';
import RegularSeasonPlayoffs2023 from '@/components/graphs/regPlayoffs.js';
import Wrapper from '@/components/page/wrapper.js';

const homePage = () => (
  <main>
    <div className='grid'>
      <NavBar/>
      <h1 className='top-header'>Hi--this is my site for testing out d3, here&apos;s some of the things I&apos;ve done!!</h1>
      <ul>
        <li><a href='/titletown'>Who&apos;s really titletown?</a></li>
      </ul>
    </div>
  </main>
);

export default homePage;

{/* <Wrapper>
<GraphLabel title='2023 WR Tgts vs. Recs' text="
Delve into the heart of football strategy with this chart, unveiling the intricate relationship between wide receivers' targets and successful catches. Through intuitive circles, players come to life on the chart, their sizes indicating salaries for swift comparisons. Essential for fans, analysts, and teams, this visualization sheds light on receiving skills, providing valuable insights for enthusiasts and data aficionados.
"/>
<WRScatter/>
</Wrapper>
<Wrapper>
<GraphLabel title='2022 RB Att vs. Yds' text='
This visualization captures the essence of football performance by depicting the correlation between rushing attempts and yards gained. Each player is represented by circles, their sizes reflecting salaries, enabling quick comparisons. Vital for fans, analysts, and teams, this chart unveils player dynamics, offering intriguing insights for enthusiasts and data aficionados alike.
'/>
<RBBubble22/>
</Wrapper>
<Wrapper>
<GraphLabel title='2023 RB Att vs. Yds' text='
Similar to the last graph, this showcases the abilities of different NFL running-backs compared to their compensation.
'/>
<RBBubble23/>
</Wrapper>
<Wrapper>
<GraphLabel title='Who&apos;s really titletown?' text='
Similar to the last graph, this showcases the abilities of different NFL running-backs compared to their compensation.
'/>
<CityChamps/>
</Wrapper>
<div className='flex place-self-center'>
<RegularSeasonPlayoffs2023/>
</div> */}