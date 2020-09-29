import React from 'react';
import './App.css'
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div className='App'>
  
    <BrowserRouter>
    <Header/>
   <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>

   </Switch>
    </BrowserRouter>
     
    </div>
  );
}



export default App;
