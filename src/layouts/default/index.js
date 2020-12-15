import React from 'react';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import { SearchProvider } from '../../store/SearchContext';

function DefaultLayout({ children }) {
    return (
        <SearchProvider>
            <div className='app'>
                <Header />
                <main className='container mt-6 py-3'>
                    {children}
                </main>
                <Footer />
            </div>
        </SearchProvider>
    )
}

export default DefaultLayout
