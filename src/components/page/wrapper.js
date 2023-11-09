import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';

const Wrapper = () => (
    <div className='flex place-self-center'>{children}</div>
);

export default Wrapper;