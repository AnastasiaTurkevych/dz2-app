import React from 'react';
import './form.css'


class NameField extends React.Component {
    
    
    constructor (props) {
        super(props);

        let nameIsValid = this.validateName(this.props.name)


        this.state = {
            name: this.props.name,  
            nameValid: nameIsValid    }

    }


    
    validateName  (name) {
        return name.length > 3
    }

    onChange = (e) => {
        let isValid = this.validateName(e.target.value)
        this.setState({
            name: e.target.value,
            nameValid: isValid
        });
    }


    render() {

        let nameColor = this.state.nameValid ? '#aaf' : 'white';

        return (
            <div className="form-control">
                 <label htmlFor="username">Username:</label>

                 <input 
                 id="username"
                    style={{backgroundColor: nameColor}}
                    type="text" value={this.state.name} onChange={this.onChange} />

            </div>
        )}
}



export default NameField