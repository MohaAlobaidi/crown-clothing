import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

 import {ReactComponent as Logo } from '../assets/crown.svg'
import {auth} from './../../firebase/firebase.utils'
import CartIcon from './../cart-icon/cart-icon.component'
import CartDropdown from './../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from './../../redux/user/user.selector'
import {selectCartHidden} from './../../redux/cart/cart.selectors'


const Header =({currentUser,hidden})=>{
    return (<div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
        <Link to='/shop' className='option'>
            SHOP
        </Link>

        <Link to='/shop' className='option'>
            CONTACT
        </Link>
        {
            currentUser? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT </div>
            : <Link to='/signin'>SIGN IN </Link>
        }
         <CartIcon/>
        </div>
       {
           hidden ? null : <CartDropdown/>
       }
       
        
    </div>
    )
}

// const mapStateToProps =(state)=>{
//     return{
//         currentUser: state.user.currentUser ,
//         hidden:state.cart.hidden,
//     }
// }


// const mapStateToProps =({ user:{currentUser},cart:{hidden} })=>{
//     return{
//         // currentUser:currentUser,
//         // hidden:hidden
//         currentUser,
//         hidden
//     }
// }


const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser,
        hidden: selectCartHidden
    }
)
export default connect(mapStateToProps,null) (Header)

