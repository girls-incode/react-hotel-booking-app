import React, { useContext } from 'react';
import './style.scss';
import { SearchContext } from '../../store/SearchContext';

function Room({ info, selected }) {
    const [data, dispatch] = useContext(SearchContext);
    return (
        <div className={`card ${selected ? `card-active` : ``} flex flex-row pl-0`}
            onClick={ev => dispatch({
                type: 'changeSearch',
                payload: {
                    room: {
                        id: info.id,
                        name: info.name,
                        price: info.price,
                    }
                }
            })}>
            <img src={`/images/${info.photo}`} alt={info.name} className='card-img' />
            <div>
                <h3>{info.name}</h3>
                <p>{info.desc}</p>
                <p>Size: {info.size}m2</p>
                <div className='d-flex align-items-end justify-content-between'>
                    <div>
                        <img src="/images/icons/double-bed.svg" width="40" alt='' />
                        <div>Beds: {info.beds}</div>
                    </div>
                    <div>
                        People: {info.capacity}
                    </div>
                    <div className='price'>
                        € {info.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room
