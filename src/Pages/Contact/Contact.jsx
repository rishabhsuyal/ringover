import React from 'react';
import Chain from './../../Photos/chain.jpg';
import "./Contact.css";
import facebook from './../../Photos/facebook@2x.png'
import insta from './../../Photos/insta@2x.png'
import twitter from './../../Photos/twitter@2x.png'

function Contact() {
    return (
        <>
            <img className='chain-image' src={Chain} />
            <div className='contact-container'>
                <div className='info-container'>

                    <h2 className='stay'>REACT US AT</h2>

                    <h3>support@kicksup.com</h3>
                    <a>for any technical support</a>

                    <h3>info@kicksup.com</h3>
                    <p>for any technical support</p>

                    <h3>feedback@kicksup.com</h3>
                    <p>for any technical support</p>

                    <h3>jobs@kicksup.com</h3>
                    <p>for any technical support</p>

                </div>
                <div className='icon-container'>
                   <p className='stay' >Stay in touch</p>
                    <div className='image-container'>
                        <img className='icon-image' src={twitter} />
                        <img className='icon-image' src={facebook} />
                        <img className='icon-image' src={insta} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact