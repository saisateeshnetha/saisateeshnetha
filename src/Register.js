import React, { Component } from 'react'

 class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             mobile:''
        }
    }
   /* usernameHandle = event =>{
        this.setState({
            username: event.target.value
        })
    }
    emailHandle = event =>{
        this.setState({
            email: event.target.value
        })
    }
    mobileHandle = e =>{
        this.setState({
            mobile: e.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
       console.log("submited...")
       console.log(this.state);
       console.log("post data to surver using axios calls")
    }*/

    render() {
        return (
            <div>
                <h1>Register Here</h1>
               <form onSubmit={this.submitHandler}>
               <div className = "form-group">
                    <label>Username</label>
                    <input type="text" value={this.state.username}
                     onChange={e => (this.setState({username: e.target.value}))} />
                </div>
                <div className = "form-group">
                    <label>Email</label>
                    <input type="text" value={this.state.email} 
                    onChange={e => (this.setState({email: e.target.value}))}  />
                </div>
                <div className = "form-group">
                    <label>Mobile</label>
                    <input type="text" value={this.state.mobile} 
                    onChange={e => (this.setState({mobile: e.target.value}))}  />
                </div>
                <div className = "form-group">
                    <input type="submit" value="Register" />
                </div>
               </form>
            </div>
        )
    }
}

export default Register
