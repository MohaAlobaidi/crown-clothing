import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart,addItem,removeItem} from './../../redux/cart/cart.actions'


const CheackoutItem = ({cartItem,clearItem,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className="quantity"> 
            <div className='arrow' onClick={()=>removeItem(cartItem)}> &#10094; </div>
            <span className='value'> {quantity} </span>  
            <div className='arrow' onClick={()=>addItem(cartItem)}> &#10095; </div>

            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
           
            
        </div>
    )
}

const mapDispatchToProps =(dispath)=>{
    return{
        clearItem:(item)=> dispath(clearItemFromCart(item)),
        // clearItemFromCart:(cartItem)=> dispath(clearItemFromCart(cartItem))
        addItem: (item)=>dispath(addItem(item)),
        removeItem: (item)=>dispath(removeItem(item))

    }
}
export default connect(null,mapDispatchToProps) (CheackoutItem)





////second way direct dispatch
// import React from 'react'
// import './checkout-item.styles.scss'
// import {connect} from 'react-redux'
// import {clearItemFromCart} from './../../redux/cart/cart.actions'


// const CheackoutItem = ({cartItem,dispatch})=>{
//     const {name,imageUrl,price,quantity}=cartItem
//     return(
//         <div className='checkout-item'>
//             <div className='image-container'>
//                 <img src={imageUrl} alt='item'/>
//             </div>
//             <span className='name'>{name}</span>
//             <span className="quantity"> {quantity}</span>
//             <span className='price'>{price}</span>
//             <div className='remove-button' onClick={()=> dispatch(clearItemFromCart(cartItem) )}>&#10005;</div>
            
//         </div>
//     )
// }


// export default connect(null) (CheackoutItem)