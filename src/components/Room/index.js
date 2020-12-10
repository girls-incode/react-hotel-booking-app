import React, { useContext } from 'react';
import './style.scss';
import { RoomContext } from '../../store/RoomContext';

function Room({ info }) {
    const [data, dispatch] = useContext(RoomContext);
    return (
        <div className='card d-flex flex-row pl-0'
            onClick={ev => dispatch({
                type: 'changeRoom',
                payload: {
                    id: info.id,
                    name: info.name,
                    price: info.price,
                }
            })}>
            <img src={`/images/${info.photo}`} alt={info.name} />
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
