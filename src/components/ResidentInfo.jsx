import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles/residentInfo.css'

const ResidentInfo = ({ url }) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(error => console.log(error))
    }, [])

    console.log(resident)

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='card__image' src={resident?.image} alt="" />
                <div className='card__status-container'>
                    <div className= {`card__status-circle ${resident?.status}`}></div>
                    <span className='card__status-text'>{resident?.status}</span>
                </div>
            </header>
            <section className='card__body'>
                <h3 className='card__resident-name'>{resident?.name}</h3>
                <ul className='card__info-container'>
                    <li className='card__item'>
                        <p className='card__info-label'>Specie: </p>
                        <p className='card__info'>{resident?.species}</p>
                    </li>
                    <li className='card__item'>
                        <p className='card__info-label'>Origin: </p>
                        <p className='card__info'>{resident?.origin.name}</p>
                    </li>
                    <li className='card__item'>
                        <p className='card__info-label'>Appearance in episodes: </p>
                        <p className='card__info'>{resident?.episode.length}</p>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default ResidentInfo;