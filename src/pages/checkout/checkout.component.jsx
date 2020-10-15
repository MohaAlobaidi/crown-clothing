
import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import {selectCartIems,selectCartTotal} from './../../redux/cart/cart.selectors'
import CheackoutItem from './../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems,total})=>{
return(
    <div className='checkout-page'> 
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>


            <div className='header-block'>
                <span>Quantity</span>
            </div>


            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem=> <CheackoutItem key={cartItem.id} cartItem={cartItem}/>)}

        <div className='total'> <span>Total : &#8364; {total}</span>   </div>

        <div className='test-warrning'>
            Please use the following test credit cart for payments
            <br/>
            4242 4242 4242 4242 - EXP: DD/MM - CVV: 123
        </div>

        <StripeCheckoutButton price={total}/>
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartIems,
    total:selectCartTotal 
})
export default connect(mapStateToProps,null) (CheckoutPage);