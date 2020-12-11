import React from 'react'
import { Route } from 'react-router-dom'

import BookingLayout from './pages/layouts/booking-layout'

const BookingRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <BookingLayout>
                <Component {...props} />
            </BookingLayout>
        )} />
    )
}

export default BookingRoutes