import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../store/SearchContext';

function Confirmation() {
    const [data, dispatch] = useContext(SearchContext);
    const { step, finished } = data;
    let history = useHistory();

    if (step < 4 && !finished) {
        history.push('/');
        return null;
    }

    return (
        <div className='vh-100 d-flex justify-content-center flex-column text-center dark-blue'>
            <h1>Congrats, reservation done!</h1>
            <h2>Please check your email with all details</h2>
            <div>
                <button onClick={ev => history.push('/')} className='btn btn-primary my-3'>Explore more</button>
            </div>
        </div>
    )
}

export default Confirmation;
