import React from 'react';

import './form-input.styles.scss';

interface iProps {
    handleChange: (event: any) => void,
    label: string,
    value: any,
    name: string,
    type: string,
    required: any
}

const FormInput = ({handleChange , label, ...props} : iProps) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...props}/>
        {label ? (
            <label 
                className={ `${
                    props.value.length ? 'shrink' : ''
                } form-input-label `}
            >
            {label}
            </label>
            ) : null
        }
    </div>
)
export default FormInput;