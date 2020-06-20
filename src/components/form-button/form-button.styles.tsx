import styled, {css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: 2px solid black;
    transition: all 0.2s ease-in-out;
    &:hover{        
        background-color: white;
        color: black;
    }
`
const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`; 
const googleSignInStyles = css`
    background-color: #4285f4;
    border: 2px solid #4285f4;
    color: white;
    &:hover {
        background-color: darken(#4285f4-dark,10);
        border: 2px solid darken(#4285f4-dark,10);
    }
`

const getButtonStyles = (props:any) => {
    if(props.isGoogleSignIn){
        return googleSignInStyles
    }
    return props.inverted ? invertedButtonStyles : buttonStyles
}
export const FromButtonContainer = styled.button`
    display: flex;
    justify-content: center;        
    padding: 1rem;
    margin: 0.5rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;    
    ${getButtonStyles}
`