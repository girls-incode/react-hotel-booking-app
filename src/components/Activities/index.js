import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../store/SearchContext';

function Activities() {
    const [data, dispatch] = useContext(SearchContext);
    const [activities, setActivities] = useState([]);
    const { extra } = data;

    const exist = (id) => extra.length && extra.filter(e => e.id === id).length;

    useEffect(() => {
        fetch('./activities.json')
            .then(res => res.json())
            .then(res => setActivities(res))
            .catch(err => console.log(err));
    }, [data]);

    return (
        <>
        <section>
            {activities && activities.map((activity, i) => (
                <div className={`card ${exist(activity.id) ? `card-active` : ``} flex flex-row pl-0`} key={i}>
                    <img src={`/images/${activity.photo}`} className='card-img' alt={activity.name} />
                    <div>
                        <h3>{activity.name}</h3>
                        <p>{activity.desc}</p>
                        <div className='d-flex align-items-end justify-content-between'>
                            <div>
                                {!exist(activity.id) && <button onClick={ev =>
                                    dispatch({
                                        type: 'addActivity',
                                        payload: {
                                            field: 'extra',
                                            extra: {
                                                id: activity.id,
                                                name: activity.name,
                                                price: activity.price,
                                            }
                                        }
                                    })} className='btn btn-link p-0'>Add to my stay</button>}
                            </div>
                            <div className='price'>
                                € {activity.price}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </section>
        <div className='d-flex justify-content-between mt-3'>
            <a href='/'>&lt; Back</a>
            <a href='/'>Skip &gt;</a>
        </div>
        </>
    )
}

export default Activities;