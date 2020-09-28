import React from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";

import Homepage from './pages/homepage/homepage.component'

const Hats =()=>{
 return <div>
    hatssss page
  </div>
}


function App() {
  return (
    <div>
  
    <BrowserRouter>
   <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop/hats' component={Hats}/>
   </Switch>
    </BrowserRouter>
     
    </div>
  );
}



export default App;
