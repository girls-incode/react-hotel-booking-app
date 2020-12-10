import './App.scss';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Reservation from './components/Reservation/index';
import Rooms from './components/Rooms/index';
import Search from './components/Search/index';
import { RoomProvider } from './store/RoomContext';
import { SearchProvider } from './store/SearchContext';

function App() {
  let bookingStep = 1;

  return (
    <SearchProvider>
      <RoomProvider>
        <div className='app'>
          <Header />
          <Search />
          <div className='container'>
            <div className='row'>
              <main className='col-md-8'>
                <section className='mb-5'>
                  <h1>Rooms & Rates</h1>
                  <p>Plan your perfect stay at our hotel</p>
                  <img src={`/images/book-steps-${bookingStep}.png`} width='480' alt='' />
                </section>
                <Rooms />
              </main>
              <aside className='col-md-4'>
                <section className='mb-4'>
                  <img src='/images/coco-drink.png' width='300' alt='' />
                  <h2 className='text-uppercase font-weight-bold'>TODAY ONLY: 10% OFF</h2>
                  <p>Book <span className='text-underline'>today</span> and get an exclusive <strong>10% discount</strong> on your stay.</p>
                  <button className='btn btn-primary text-uppercase'>Enjoy</button>
                </section>
                <Reservation />
              </aside>
            </div>
          </div>
          <Footer />
        </div>
      </RoomProvider>
    </SearchProvider>
  );
}

export default App;
