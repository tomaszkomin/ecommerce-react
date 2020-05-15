import React from "react";

import './form-button.styles.scss';
interface iProps {
    onClick?: any,
    children?: string | any,
    type?: 'button' | 'submit' | 'reset' ,
    value?: string,
    required?: any
    isGoogleSignIn?: boolean | undefined
}

const FormButton = ({ children, isGoogleSignIn, ...props}: iProps) => {
    return( 
        <button className={` ${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...props}>
            {children}
        </button>
    )
}
export default FormButton;