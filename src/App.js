import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import BookingRoutes from './booking-routes';
import BookingSteps from './components/BookingSteps/index';
import Confirmation from './components/Confirmation/index';
import NotFound from './components/NotFound/index';

function App() {
  return (
    <Router>
      <Switch>
        <BookingRoutes path="/" exact component={BookingSteps} />
        <Route path="/confirmation" component={Confirmation} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
