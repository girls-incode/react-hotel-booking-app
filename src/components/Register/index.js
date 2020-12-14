import React, { useContext } from 'react';
import { SearchContext } from '../../store/SearchContext';

function Register() {
    const [data] = useContext(SearchContext);

    if (data.step !== 3) return null;

    return (
        <div>
            Register
        </div>
    )
}

export default Register;