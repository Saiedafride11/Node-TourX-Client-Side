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
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './pages/MyOrder/MyOrder';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import AddServices from './pages/AddServices/AddServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <PrivateRoute path="/tour/:tourId">        
                <TourDetails></TourDetails>
              </PrivateRoute>
              <Route path="/news">        
                <NewsDetails></NewsDetails>
              </Route>
              <PrivateRoute path="/manageorders">        
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute path="/orders">        
                <MyOrder></MyOrder>
              </PrivateRoute>
              <PrivateRoute path="/addservices">        
                <AddServices></AddServices>
              </PrivateRoute>
              <Route path="/contact">        
                <Contact></Contact>
              </Route>
              <Route path="/about">        
                <About></About>
              </Route>
              <Route path="/login">        
                <Login></Login>
              </Route>
              <Route path="*">        
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
