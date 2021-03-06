import React from 'react';

import FormInput from '../form-input/form-input.component';
import FormButton from './../form-button/form-button.component';

import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import './sign-in.styles.scss';

interface MyProps {};
interface MyState{ email:string , password:string};

class SignIn extends React.Component<MyProps, any>{
    constructor(props:MyProps){
        super(props);
        this.state = {
            email: '',
            password: '' 
        }
    }
    
    public handleSubmit = async (event: React.FormEvent<any>) => {
        const { email, password }  = this.state;
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword( email, password );
            this.setState({
                email: email,
                password: password
            })} 
        catch(error){

        }        
        this.setState({
            email: '',
            password: ''
        });
    }
    // public handleChange = (event: React.FormEvent<any>) => {
    public handleChange = (event:any) => {
        const { value, name } = event.target;
        
        this.setState({
            [name]:value
        })
    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value= {this.state.email}
                        handleChange= {this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value= {this.state.password}
                        label="password"
                        handleChange= {this.handleChange}
                        required
                    />
                    <div className="button">
                        <FormButton type="submit" value="Login">LOGIN</FormButton>
                        <FormButton type="button" onClick={signInWithGoogle} isGoogleSignIn>LOGIN WITH GMAIL </FormButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;