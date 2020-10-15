import React,{Component} from 'react';
import './App.css'
import { BrowserRouter, Route,Switch,Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from  './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout.component'
class App extends Component{

// constructor (){
//   super()
//   this.state={
//     currentUser :null,
//   }
// }

unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} =this.props

    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth=> {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
       
        userRef.onSnapshot(snapShot =>{
          // this.setState({
          //   currentUser:{
          //     id:snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, ()=> console.log(this.state))

          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });
        
      }
      else{
        // this.setState({
        //   currentUser:userAuth
        // })

        setCurrentUser(userAuth)
      }

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

render (){
  return(

<div className='App'>
  
  <BrowserRouter>
  <Header/>
 <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
     
      <Route 
      exact 
      path='/signin' 
      render={()=> this.props.currentUser?
      (<Redirect to='/'/>):
      (<SignInAndSignOutPage/>)}
      />

 </Switch>
  </BrowserRouter>
   
  </div>

  )
}

}

// const mapStateToProps = ({user}) =>{
//   return{
//     currentUser: user.currentUser
//   }
// }


const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser

}
)

const mapDispatchToProps = (dispatch)=>{
  return{
    setCurrentUser : (user)=>dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
