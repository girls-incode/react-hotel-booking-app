import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../store/SearchContext';
import Room from '../Room/index';

function Rooms() {
    const [data] = useContext(SearchContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('./rooms.json')
            .then(res => res.json())
            .then(res => {
                let bySpace = res.filter(r => r.capacity >= parseInt(data.adults) + parseInt(data.children))
                setRooms(bySpace);
            })
            .catch(err => console.log(err));
    }, [data]);

    if (data.step !== 1) return null;

    return (
        <section>
            {rooms && rooms.map((room, i) => <Room key={i} info={room} selected={data.room.id === room.id} />)}
        </section>
    )
}

export default Rooms
