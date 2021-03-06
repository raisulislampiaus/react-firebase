import React, { useEffect } from 'react'
import './App.css';
import Header from './Header/Header';
import Home from './HOME/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase'
import { useStateValue} from './StateProvider'

function App() {
  const [{}, dispatch] = useStateValue();
   useEffect(() => {
     auth.onAuthStateChanged(authUser => {
       console.log('this is', authUser);
        if (authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else{
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
     })
   }, [])

  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/login">
      <Login />
     </Route>
      <Route path="/checkout">
           <Header />
           <Checkout />
      </Route>
      
      <Route path="/">
          <Header />
          <Home />
      </Route>
     
      </Switch>
    </div>
    </Router>
  );
}

export default App;
