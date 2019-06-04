import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home';
import BillPayment from './BillPayment';
import Wallet from './Wallet';



const App = () => <div>
  <BrowserRouter>
    <Switch>
        <Route   path='/home' component={Home}/>
        <Route  path='/signup/bill' component={Signup}/>
        <Route exact path='/bill' component={BillPayment}/>
        <Route exact path='/wallet' component={Wallet}/>
      
       
    </Switch>
</BrowserRouter>
</div>


export default App;