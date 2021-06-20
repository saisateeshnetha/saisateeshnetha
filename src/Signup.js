import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             mobile:'',
             errors: {}

        }
    }
    fieldsHandler = e => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();
        if(this.formValidate()){
          //send data to server
          console.log("post data to serever")
        }
        else{
            // display input errors
            this.setState({
                errors: this.state.errors
            })
        }
    }
    formValidate = () =>{
        let isFormValid = true;
        let errors = this.state.errors;
        //username validation
        if (this.state.username.trim() === ""){
            isFormValid = false;
            errors['username'] = 'username is required'
        }
        //email validation
        if (this.state.email.trim() === ""){
            isFormValid = false;
            errors['email'] = ' email is required'
        }else{
            if(this.vailidateEmail.com(this.state.email)){
                isFormValid = false;
                errors['email'] = 'enter vaild email'  
            }
        }

        //mobile validation
        if (this.state.mobile.trim() === ""){
            isFormValid = false;
            errors['mobile'] = ' mobile is required'
        }

    return isFormValid;

    }
    hideErrors = event =>{
        let errors = this.state.errors;
        errors[event.target.name] = ''
        this.setState({
            errors: this.state.errors
        })
    }

    showErrors = event =>{
        if(event.target.value.trim() === ""){
        let errors = this.state.errors;
        errors[event.target.name] = event.target.name+"is required";
        this.setState({
            errors: this.state.errors
        })
      } 
    }
    
    render() {
        return (
            <div>
             <h1>Signup Here</h1>
               <form autoComplete="off" onSubmit={this.submitHandler}>
               <div className = "form-group">
                    <label>Username</label>
                    <input onFocus={this.hideErrors} onBlur={this.showErrors} type="text" name='username' value={this.state.username}
                     onChange={this.fieldsHandler} />
                     {this.state.errors.username ? <small style={{color:'red'}}>{this.state.errors.username}</small>:null}
                </div>
                <div className = "form-group">
                    <label>Email</label>
                    <input onFocus={this.hideErrors} onBlur={this.showErrors} type="text" name='email' value={this.state.email} 
                    onChange={this.fieldsHandler}  />
                      {this.state.errors.email ? <small style={{color:'red'}}>{this.state.errors.email}</small>:null}
                </div>
                <div className = "form-group">
                    <label>Mobile</label>
                    <input onFocus={this.hideErrors} onBlur={this.showErrors} type="text" name='mobile' value={this.state.mobile} 
                    onChange={this.fieldsHandler}  />
                    {this.state.errors.mobile ? <small style={{color:'red'}}>{this.state.errors.mobile}</small>:null}
                </div>
                <div className = "form-group">
                    <input type="submit" value="signup" />
                </div>
               </form>
                
            </div>
        )
    }
}

export default Signup
