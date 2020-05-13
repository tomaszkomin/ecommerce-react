import React from 'react';

import FormInput from '../form-input/form-input.component';
import FormButton from './../form-button/form-button.component';

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
    public handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
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
                        label="type Email"
                        value= {this.state.email}
                        handleChange= {this.handleChange}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value= {this.state.password}
                        label="type Label"
                        handleChange= {this.handleChange}
                        required
                    />
                    <FormButton type="submit" value="Login">LOGIN</FormButton>
                    <FormButton type="submit" value="cancel">CANCEL</FormButton>
                    {/* <input type="submit" value="Login" /> */}
                </form>
            </div>
        )
    }
}
export default SignIn;