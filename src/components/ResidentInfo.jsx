import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setResident(res.data))
            .catch(error => console.log(error))
    }, [])

    console.log(resident)

    return (
        <article>
            <header>
                <img src={resident?.image} alt="" />
                <div>
                    <span className='circle'></span>
                    <span>{resident?.status}</span>
                </div>
            </header>
            <section>
                <h3>{resident?.name}</h3>
                <ul>
                    <li><span>Specie: </span><span>{resident?.species}</span></li>
                    <li><span>Origin: </span><span>{resident?.origin.name}</span></li>
                    <li><span>Episodes where appeared: </span>{resident?.episode.length}<span></span></li>
                </ul>
            </section>
        </article>
    );
};

export default ResidentInfo;