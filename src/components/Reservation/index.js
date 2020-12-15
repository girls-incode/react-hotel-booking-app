import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { DiscountContext } from '../../store/DiscountContext';
import { useSearchValue } from '../../store/SearchContext';
import { formatDateView } from '../../utils/formatDate';
import SelectList from './../SelectList/index';
import './style.scss';

function Reservation() {
    let history = useHistory();
    const [data, dispatch] = useSearchValue();
    const discount = useContext(DiscountContext);
    const { room, extra, step } = data;
    const { price } = room;
    const sum = (acc, cur) => acc + cur;
    const total = extra.length ? extra.map(el => el.price).reduce(sum, 0) + price : price;

    return (
        <section className='card'>
            <h2 className='mb-4'>
                Reservation Summary
            </h2>
            <div className='d-flex justify-content-between'>
                <h3>
                    {room.name}
                </h3>
                <SelectList name='rooms' start={1} />
            </div>
            <div className='d-flex justify-content-between mb-3'>
                <div>
                    <div className='font-weight-bold'>Check in</div>
                    <div>From 15.00h</div>
                </div>
                <div>
                    <div className='font-weight-bold'>Check out</div>
                    <div>Before 12.00h</div>
                </div>
            </div>
            <div className='mb-3'>
                <div className='font-weight-bold'>Reservation date</div>
                <div>From <strong>{formatDateView(data.checkin)}</strong> to <strong>{formatDateView(data.checkout)}</strong></div>
            </div>
            <div className='mb-3'>
                <div className='font-weight-bold'>People</div>
                <div>{data.adults} Adults</div>
                <div>{data.children} Children</div>
            </div>
            <div className='card-total'>
                {discount > 0 && (
                    <>
                        <div>
                            <div>Promo Code</div>
                            <div>-{discount}%</div>
                        </div>
                        <div>
                            <div>Room Price</div>
                            <div>€ <del>{price}</del></div>
                        </div>
                    </>
                )}
                <div className='mb-3'>
                    <div>
                        <div className='price'>Total</div>
                        {/* <a href='/'>Price details &gt;</a> */}
                    </div>
                    <div className='price'>€ {discount
                        ? (total - discount / 100 * total).toFixed(2)
                        : total}
                    </div>
                </div>
                {extra && extra.map(item => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>€ {item.price}</div>
                    </div>
                ))}
            </div>
            <button type='button' className='btn btn-primary btn-group-justified'
                onClick={ev => {
                    dispatch({
                        type: 'changeSearch',
                        payload: {
                            step: (step >= 3 ? 1 : step + 1),
                            finished: step >= 3 ? true : false
                        }
                    });
                    if (step >= 3) { history.push('/confirmation'); }
                }}>
                Continue
            </button>
        </section>
    )
}

export default Reservation;