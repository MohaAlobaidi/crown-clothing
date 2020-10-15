import React from 'react'
import {connect } from 'react-redux'
import './cart-icon.styles.scss'
import {createStructuredSelector} from 'reselect'

import {ReactComponent as ShoppingIcon} from './../assets/shopping-bag.svg'
import {toggleCartHidden} from './../../redux/cart/cart.actions'
import {selectCartItemsCount} from './../../redux/cart/cart.selectors'


const CartIcon =({toggleCartHidden,itemCount})=>{
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

// const mapStateToProps = ({cart:{cartItems}})=>{
// return {
//     itemCount:    cartItems.reduce( (accumaltedQuantity,cartItem)=> accumaltedQuantity+ cartItem.quantity ,0 )
// }
// }


// const mapStateToProps = (state)=>{
//     return{
//         itemCount: selectCartItemsCount(state)
//     }
// }
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})

const mapDispatchToProps =(dispatch)=>{
    return{
        toggleCartHidden : ()=>dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps) (CartIcon)