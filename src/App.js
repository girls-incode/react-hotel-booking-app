import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import BookingRoutes from './booking-routes';
import Activities from './components/Activities/index';
import NotFound from './components/NotFound/index';
import Register from './components/Register/index';
import Rooms from './components/Rooms/index';

function App() {
  return (
    <Router>
      <Switch>
        <BookingRoutes path="/" exact component={Rooms} />
        <BookingRoutes path="/activities" component={Activities} />
        <BookingRoutes path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
