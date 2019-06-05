import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home';
import Payment from './BillPayment';
import Wallet from './Wallet';



const App = () => <div>
  <BrowserRouter>
    <Switch>
        <Route   path='/home' component={Home}/>
        <Route  path='/signup/bill' component={Signup}/>
  
        <Route exact path='/wallet' component={Wallet}/>
        <Route exact path='/payment' component={Payment}/>
      
       
    </Switch>
</BrowserRouter>
</div>


export default App;