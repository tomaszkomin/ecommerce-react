import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

import { auth, createUserDocument } from './../../firebase/firebase.utils';

class SignUp extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword: ''
        }
    }
    handleSubmit= async(event:any) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("paswords don't mach");
            return;
        }
        try{
            const{ user } = await auth.createUserWithEmailAndPassword(email,password);
            createUserDocument(user,{displayName});
            //clear form 
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword: ''
            })
        }
        catch(error){
            console.log(error);
        }
    }
    handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        this.setState({[name]:value});
    
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>Create new account</h2>                
                    <span>Please Sign Up !</span>
                    <form className='sign-up' onSubmit={this.handleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            label='Display Name'
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            label='Email'
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            label='Password'
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            label='Confirm Password'
                            onChange={this.handleChange}
                            required
                        />
                        <div className="button">
                            <FormButton type="submit" value="signup">SIGN UP</FormButton>
                        </div>
                    </form>
            </div>
        )
    }
}
export default SignUp;