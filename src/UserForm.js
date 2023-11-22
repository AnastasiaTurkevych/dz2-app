import { Component, createRef } from "react";
import NameField from "./NameField";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import './form.css'


class UserForm extends Component{

    constructor (props) {
        super(props);

        this.NameField = createRef();
        this.EmailField = createRef();
        this.PasswordField = createRef();
        this.state = {
            currentView: "signUp", // Corrected the case here
          };
    }

    changeView = (view) => {
        this.setState({
          currentView: view
        })
      }

      currentView = () => {
        switch(this.state.currentView) {
          case "signUp":
            return (
              <form>
                <h2>Sign Up!</h2>
                <fieldset>
                  <legend>Create Account</legend>
                  <ul>
                    <li>
                    <NameField ref={this.NameField} name="" />
                    </li>
                    <li>
                    <EmailField ref={this.EmailField} email="" />    
                    </li>
                    <li>
                    <PasswordField ref={this.PasswordField} password="" />   
                    </li>
                  </ul>
                </fieldset>
                <button>Submit</button>
                <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
              </form>
            )
            break
          case "logIn":
            return (
              <form>
                <h2>Welcome Back!</h2>
                <fieldset>
                  <legend>Log In</legend>
                  <ul>
                    <li>
                    <NameField ref={this.NameField} name="" />
                    </li>
                    <li>
                    <PasswordField ref={this.PasswordField} password="" />   
                    </li>
                    <li>
                      <i/>
                      <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                    </li>
                  </ul>
                </fieldset>
                <button>Login</button>
                <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
              </form>
            )
            break
          case "PWReset":
            return (
              <form>
              <h2>Reset Password</h2>
              <fieldset>
                <legend>Password Reset</legend>
                <ul>
                  <li>
                    <em>A reset link will be sent to your inbox!</em>
                  </li>
                  <li>
                  <EmailField ref={this.EmailField} email="" />    
                  </li>
                </ul>
              </fieldset>
              <button>Send Reset Link</button>
              <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
            </form>
            )
          default:
            break
        }
      }
    
   
    handleSubmit = (e) => {
        e.preventDefault();
        
    if (this.NameField.current.state.nameValid) {
        alert(`Name: ${this.NameField.current.state.nameValid}`);
      } else {
        alert(`Name is not valid`);
      }
  
      if (this.EmailField.current.state.emailValid) {
        alert(`Email: ${this.EmailField.current.state.email}`);
      } else {
        alert(`Email is not valid`);
      }
  
      if (this.PasswordField.current.state.passwordValid) {
        alert(`Password: ${this.PasswordField.current.state.passwordValid}`);
      } else {
        alert(`Password is not valid`);
      }
    }



    render () {
        return (
            <section id="entry-page">
            {this.currentView()}
          </section>)
    }

}


export default UserForm;