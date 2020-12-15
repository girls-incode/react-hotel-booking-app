import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../store/SearchContext';

function Activities() {
    const [data, dispatch] = useContext(SearchContext);
    const [activities, setActivities] = useState([]);
    const { extra, step } = data;

    const exist = (id) => extra.length && extra.filter(e => e.id === id).length;

    useEffect(() => {
        fetch('./activities.json')
            .then(res => res.json())
            .then(res => setActivities(res))
            .catch(err => console.log(err));
    }, [data]);

    if (data.step !== 2) return null;

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
                <button onClick={ev => {
                    dispatch({
                        type: 'changeSearch',
                        payload: {
                            step: (step <= 1 ? 1 : step - 1)
                        }
                    })
                }} className='btn'>&lt; Back</button>
                <button onClick={ev => {
                    dispatch({
                        type: 'changeSearch',
                        payload: {
                            step: (step >= 3 ? 1 : step + 1)
                        }
                    });
                }} className='btn'>Skip &gt;</button>
        </div>
        </>
    )
}

export default Activities;