import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Receipt from './Receipt';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Payment from './BillPayment';
import Wallet from './Wallet';
import Forgot from './Forgot';



const App = () => <div>
  <BrowserRouter>
    <Switch>
        <Route   path='/home' component={Home}/>
        <Route  path='/receipt' component={Receipt}/>
        <Route  path='/in' component={Signin}/>
        <Route  path='/up' component={Signup}/>
        <Route  path='/fg' component={Forgot}/>
      
       
    </Switch>
</BrowserRouter>
</div>


export default App;