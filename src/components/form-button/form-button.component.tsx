import React from "react";

import './form-button.styles.scss';
import { FromButtonContainer } from './form-button.styles';

interface iProps {
    onClick?: any,
    children?: string | any,
    type?: 'button' | 'submit' | 'reset' ,
    value?: string,
    required?: any
    isGoogleSignIn?: boolean | undefined,
    inverted?:boolean
}

const FormButton = ({children, ...props}:any) => {
    return( 
        <FromButtonContainer {...props}>
            {children}
        </FromButtonContainer>
    )
}
export default FormButton;