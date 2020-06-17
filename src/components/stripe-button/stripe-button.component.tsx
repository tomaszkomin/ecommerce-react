import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}:any) => {
    const priceForStripe = price * 100;
    const apiKey = 'pk_test_KoFzBhOBOippGoHUcfBSeiTQ001KbAEn8W';
    const onToken = (token: any) => {
        console.log(token);
        alert('Payment was made test')
    }
    return (
        <StripeCheckout
            label="Pay Now Label"
            name="Tomasz Komin Ecommerce"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Total is :${price}`}
            amount={priceForStripe}
            panelLabel='Panel Label'
            token={onToken}
            stripeKey={apiKey}
        />
    )
}
export default StripeCheckoutButton;