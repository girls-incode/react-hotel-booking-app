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
    const today = new Date();
    let newData = {};

    const eventhandler = res => Object.assign(newData, res);

    const changeDate = (date) => {
        const nextDate = new Date(date);
        nextDate.setDate(date.getDate() + 1);
        setStartDate(date);
        setEndDate(nextDate);
    }

    const CustomInput = ({ value, onClick }) => (
        <div className='calendar' onClick={onClick}>
            <input type='text' className="form-item" value={value} />
            <i className="bi bi-calendar-week"></i>
        </div>
    );

    return (
        <section className='search d-flex align-items-center'>
            <div className='search-wrapper w-100 my-3'>
                <div className='container py-3 search-content'>
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={startDate}
                        onChange={changeDate}
                        startDate={startDate}
                        minDate={today}
                        customInput={<CustomInput />}
                    />
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        startDate={endDate}
                        minDate={endDate}
                        customInput={<CustomInput />}
                    />
                    <SelectList name='adults' text='Adults' css='form-item' start={1} num={data.adults} onChange={eventhandler} />
                    <SelectList name='children' text='Children' css='form-item' num={data.children} onChange={eventhandler} />
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
