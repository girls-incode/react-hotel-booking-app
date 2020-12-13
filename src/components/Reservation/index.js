import React, { useContext } from 'react';
import SelectList from './../SelectList/index';
import { useSearchValue } from '../../store/SearchContext';
import { DiscountContext } from '../../store/DiscountContext';
import { formatDateView } from '../../utils/formatDate';
import './style.scss';

function Reservation() {
    const [data, dispatch] = useSearchValue();
    const discount = useContext(DiscountContext);
    const { room, extra } = data;
    const { price } = room;

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
                    <div className='price'>€ {discount ? (price - discount / 100 * price).toFixed(2) : price}</div>
                </div>
                {extra && extra.map(item => (
                    <div>
                        <div>{item.name}</div>
                        <div>€ {item.price}</div>
                </div>
                ))}
            </div>
            <a href='/activities' className='btn btn-primary btn-group-justified'>
                Continue
            </a>
        </section>
    )
}

export default Reservation;