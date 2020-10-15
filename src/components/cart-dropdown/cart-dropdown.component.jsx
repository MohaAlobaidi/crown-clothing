import React from 'react'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter,Link} from 'react-router-dom'

import CustomButton from './../custom-button/custom-button.component'
import  CartItem from './../cart-item/cart-item.component'
import {selectCartIems} from './../../redux/cart/cart.selectors'
import {toggleCartHidden} from './../../redux/cart/cart.actions'



const CartDropdown =({cartItems,history,dispatch})=>{

    return(
       
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length?
               ( cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)):
              <span className='empty-message'> No Items, cart is empty ! </span>
              
            }
            </div>  
           
            <CustomButton onClick={()=>{
                 history.push('/checkout')
                 dispatch(toggleCartHidden())
            
                 }} >GO TO CHEAKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = ({cart:{cartItems}})=>{
//     return{
// cartItems
//     }
// } befor reselector memoize

// const mapStateToProps = (state)=>{
//     return{
//       cartItems:  selectCartIems(state)
//     }
// }

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartIems
})




export default  withRouter(connect (mapStateToProps,null) (CartDropdown));





// use Link From react-router-dom
// const CartDropdown =({cartItems,toggleCartHidden})=>{

//     return(
       
//         <div className='cart-dropdown'>
//             <div className='cart-items'>
//             {
//                 cartItems.length?
//                ( cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)):
//               <span className='empty-message'> No Items, cart is empty ! </span>
              
//             }
//             </div>  
//            <Link to='/checkout'>
//            <CustomButton onClick={toggleCartHidden()} >GO TO CHEAKOUT</CustomButton>
//            </Link>
//         </div>
//     )
// }

// // const mapStateToProps = ({cart:{cartItems}})=>{
// //     return{
// // cartItems
// //     }
// // } befor reselector memoize

// // const mapStateToProps = (state)=>{
// //     return{
// //       cartItems:  selectCartIems(state)
// //     }
// // }

// const mapStateToProps = createStructuredSelector({
//     cartItems:selectCartIems
// })

// const mapDispatchToProps =(dispatch)=>{
//     return{
//         toggleCartHidden:()=>dispatch(toggleCartHidden())
//     }
// }


// export default connect (mapStateToProps,mapDispatchToProps) (CartDropdown);