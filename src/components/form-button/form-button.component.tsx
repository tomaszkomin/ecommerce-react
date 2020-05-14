import React from "react";

import './form-button.styles.scss';
interface iProps {
    handleChange?: (event: any) => void,
    onClick?: any,
    children?: string | any,
    type?: 'button' | 'submit' | 'reset' ,
    value?: string,
    required?: any
    isGoogleSignIn?: boolean | undefined
}

const FormButton = ({ children, isGoogleSignIn, ...props}: iProps) => {
    console.log('isGoogleSignIn');
    console.log(isGoogleSignIn);
    console.log(isGoogleSignIn === true );
    return( 
        <button className={` ${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...props}>
            {children}
        </button>
    )
}
export default FormButton;