import React from 'react';
import './styles/locationInfo.css'

const LocationInfo = ({ location }) => {

    return (
        <article className='box'>
            <h2 className='box__location'>{location?.name}</h2>
            <ul className='box__items-container'>
                <li className='box__item'>
                    <span className='box__label'>Type: </span>{location?.type}
                </li>
                <li className='box__item'>
                    <span className='box__label'>Dimension: </span>{location?.dimension}
                </li>
                <li className='box__item'>
                    <span className='box__label'>Population: </span>{location?.residents.length}
                </li>
            </ul>
        </article>
    );
};

export default LocationInfo;