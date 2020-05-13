import React from "react";

import './form-button.styles.scss';
interface iProps {
    handleChange?: (event: any) => void,
    children?: string,
    type?: 'button' | 'submit' | 'reset' ,
    value?: string,
    required?: any
}
const FormButton = ({ children, ...props}: iProps) => {
    return( 
        <button className='form-button' {...props}>
            {children}
        </button>
    )
}
export default FormButton;