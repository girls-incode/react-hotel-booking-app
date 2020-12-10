import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../store/SearchContext';
import Room from '../Room/index';

function Rooms() {
    const [data, dispatch] = useContext(SearchContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => {
                let bySpace = res.filter(r => r.capacity >= parseInt(data.adults) + parseInt(data.children))
                setRooms(bySpace);
            })
            .catch(err => console.log(err));
    }, [data]);

    return (
        <section>
            {rooms && rooms.map((room, i) => <Room key={i} info={room} />)}
        </section>
    )
}

export default Rooms
