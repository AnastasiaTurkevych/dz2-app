import React from 'react';
import './form.css'


class PasswordField extends React.Component {
    
    
    constructor (props) {
        super(props);



        this.state = {
            password: this.props.password,  
            passwordIsValid: this.validatePassword(this.props.password)
        }
    }


    
    validatePassword  (password) {
            const minLength = 8;
        
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
        
            return regex.test(password);
        }
        

    onChange = (e) => {
        const newPassword = e.target.value;
        let isValid = this.validatePassword(e.target.value)
        this.setState({
            password: newPassword,
            passwordValid: isValid
        });
    }


    render() {

        const passwordColor = this.state.passwordValid ? '#aaf' : 'white';

        return (
            <div className="form-control">
<label htmlFor="password">Password:</label>

                 <input 
                 id="password"
                    style={{backgroundColor: passwordColor}}
                    type="password" 
                    value={this.state.password}
                     onChange={this.onChange} />

            </div>
        )}
        }




export default PasswordField