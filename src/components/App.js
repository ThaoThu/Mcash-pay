import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Receipt from './Receipt';
import Signup from './Signup';
import Home from './Home';
import Payment from './BillPayment';
import Wallet from './Wallet';



const App = () => <div>
  <BrowserRouter>
    <Switch>
        <Route   path='/home' component={Home}/>
        <Route  path='/receipt' component={Receipt}/>
  
        <Route exact path='/wallet' component={Wallet}/>
        <Route exact path='/payment' component={Payment}/>
      
       
    </Switch>
</BrowserRouter>
</div>


export default App;