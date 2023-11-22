import React from 'react';
import './form.css'


class EmailField extends React.Component {
    
    
    constructor (props) {
        super(props);

        let emailIsValid = this.validateEmail(this.props.email);


        this.state = {
            email: this.props.email,  
            emailValid: emailIsValid    }

    }


    
    validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        
    }

    onChange = (e) => {
        let isValid = this.validateEmail(e.target.value)
        this.setState({
            email: e.target.value,
            emailValid: isValid
        });
    }


    render() {

        let emailColor = this.state.emailValid ? '#aaf' : 'white';

        return (
            <div className="form-control">
<label htmlFor="email">Email:</label>

                 <input 
                    id="email"
                    style={{backgroundColor: emailColor}}
                    type="text" value={this.state.email} onChange={this.onChange} />

            </div>
        )}
}



export default EmailField