import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import '@/app/globals.css';

const GraphLabel = ({title, text}) => (
    <div style={{
        paddingTop: '45px',
        paddingRight: '15px'
    }}>
        <h1 className='pb-4 font-bold text-xl text-right' >{title}</h1>
        <p className='w-96 pl-8 text-right' >{text}</p>
    </div>
);

export default GraphLabel;