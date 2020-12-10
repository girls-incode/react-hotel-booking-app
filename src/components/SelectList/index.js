import React, { useState, useEffect } from 'react'

function SelectList(props) {
    const { name, start = 0, end = 9, text = '', css = '', num = 0 } = props;
    const [values, setValues] = useState(num);

    let options = [];
    for (let i = start; i <= end; i++) {
        options.push(<option value={i} key={i}>{text ? (i > 0 ? `${text}: ${i}` : `${text}`) : i}</option>)
    }

    useEffect(() => {
        if (props.onChange) {
            props.onChange({ [name]: values })
        }
    }, [values]);

    return (
        <select name={name} value={values} onChange={ev => setValues(ev.target.value)} className={css}>
            {options}
        </select>
    )
}

export default SelectList;
