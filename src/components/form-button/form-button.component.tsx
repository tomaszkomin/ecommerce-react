import React from "react";

import './form-button.styles.scss';
interface iProps {
    onClick?: any,
    children?: string | any,
    type?: 'button' | 'submit' | 'reset' ,
    value?: string,
    required?: any
    isGoogleSignIn?: boolean | undefined,
    inverted?:boolean
}

const FormButton = ({ children, isGoogleSignIn, inverted, ...props}: iProps) => {
    return( 
        <button
         className={`
                ${isGoogleSignIn ? 'google-sign-in' : ''}
                ${inverted ? 'inverted' : ''}
                form-button`
            } {...props}
        >
            {children}
        </button>
    )
}
export default FormButton;