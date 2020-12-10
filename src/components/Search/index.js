import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchValue } from '../../store/SearchContext';
import { formatDateISO } from '../../utils/formatDate';
import SelectList from './../SelectList/index';
import './style.scss';

function Search() {
    const [data, dispatch] = useSearchValue();
    const [startDate, setStartDate] = useState(new Date(data.checkin));
    const [endDate, setEndDate] = useState(new Date(data.checkout));
    let newData = {};

    const eventhandler = res => Object.assign(newData, res);

    return (
        <section className='search d-flex align-items-center'>
            <div className='search-wrapper w-100 my-3'>
                <div className='container py-3 d-flex justify-content-center align-items-center'>
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className='mx-3'
                    />
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={endDate}
                        endDate={endDate}
                        minDate={startDate}
                        className='mx-3'
                    />
                    <SelectList name='adults' text='Adults' css='mx-3' start={1} num={data.adults} onChange={eventhandler} />
                    <SelectList name='children' text='Children' css='mx-3' num={data.children} onChange={eventhandler} />
                    <button className='btn btn-primary' onClick={() => dispatch({
                        type: 'changeSearch',
                        payload: {
                            checkin: formatDateISO(startDate),
                            checkout: formatDateISO(endDate),
                            ...newData,
                        }
                    })}>Modify</button>
                </div>
            </div>
        </section>
    )
}

export default Search;
