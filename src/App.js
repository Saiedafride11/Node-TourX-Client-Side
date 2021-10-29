import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import Tours from './pages/Home/Tours/Tours';
import TourDetails from './pages/Home/TourDetails/TourDetails';
import NewsDetails from './pages/Home/NewsDetails/NewsDetails';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">        
              <Home></Home>
            </Route>
            <Route path="/home">        
              <Home></Home>
            </Route>
            <Route path="/tours">        
              <Tours></Tours>
            </Route>
            <Route path="/tour/:tourId">        
              <TourDetails></TourDetails>
            </Route>
            <Route path="/news">        
              <NewsDetails></NewsDetails>
            </Route>
            <Route path="/contact">        
              <Contact></Contact>
            </Route>
            <Route path="/about">        
              <About></About>
            </Route>
            <Route path="*">        
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
