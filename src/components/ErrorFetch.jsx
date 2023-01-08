import React from 'react';
import mortyerror from '../assets/images/morty_error.gif'
import './styles/errorFetch.css'

const ErrorFetch = () => {
    return (
        <div className='error'>
            <h1 className='error__text'>Uuups! <br /> You must enter a number between 1 and 126</h1>
            <img className='error__image' src={mortyerror} alt="" />
        </div>
        
    )
}

export default ErrorFetch;