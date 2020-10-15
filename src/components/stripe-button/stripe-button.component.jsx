import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const StripeCheckoutButton =({price})=>{
const priceForStripe = price * 100;
const publishablekey = 'pk_test_51HHohPCs7gnmkdev1Uikz5cLmuRjtxyfQhmLI1DwjyA3uH5yY9Jdl8niikAQ0hKmkIvisuivATp8I9LMyvZRSBDP00nDMp4V6B'

const onToken = token =>{
    console.log(token)
    alert('payment successful')
}
return(
    <StripeCheckout
    label='Pay Now'
    name ='crown clothing ltd.'
    shippingAddress
    billingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description = {`your total is $ ${price}`}
    amount = {priceForStripe}
    panelLabel ='pay now'
    token={onToken}
    stripeKey={publishablekey}

    />
)
}

export default StripeCheckoutButton;


