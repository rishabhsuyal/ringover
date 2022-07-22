import React from 'react';
import Chain from './../../Photos/chain.jpg';
import Block from '../../Component/Block/Block';
import zindane from '../../Photos/zidane.jpg';
import christiano from '../../Photos/christiano.jpg';
import ikercasillas from '../../Photos/ikercasillas.jpg';
import james from '../../Photos/james.jpg';
import tonikroos from '../../Photos/tonikroos.jpg';
import facebook from '../../Photos/facebook@2x.png'
import linkedin from '../../Photos/linkedin.png'
import medium from '../../Photos/medium.png'
import nba from '../../Photos/nba.png'
import "./Team.css";

function Team() {
    return (
        <>
            <img className='chain-image' src={Chain} />
            <div className='main-container'>
                <h1 className='heading-tag'>Without bonding and coordination, every project is a failure.Look at who makes KICKSUP great. ;) </h1>
                <div className='block-container'>
                    <Block image={zindane} name="Zindane" post="Leadership and mangement" arr={[linkedin,medium,facebook]}/>
                    <Block image={tonikroos} name="Toni Kroos" post="Product developer" arr={[linkedin,medium]}/>
                    <Block image={ikercasillas} name="Iker Casillo" post="Marketing strategy" arr={[medium]}/>
                    <Block image={james} name="James" post="Product designer" arr={[linkedin,nba,facebook]}/>
                    <Block image={christiano} name="Cristiano" post="Financial operations" arr={[linkedin,facebook]}/>
                </div>
                <h1 className='you-tag'>and YOU! ;) </h1>
            </div>
        </>
    )
}

export default Team