import React, { Component } from 'react'
import Admin from './Admin'
import Sub from './Sub'
import Editor from './Editor'
import User from './User'

class Dashboard1 extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
          username: 'sai sateesh',
          isUserLoggedIn: true,
          role: 'sub'    
       }
   }
   
   render() {
   if(this.state.isUserLoggedIn === true){

        if(this.state.role === 'admin'){
            return <Admin username={this.state.username} /> 
        }
        else if(this.state.role === 'sub'){
            return <Sub username={this.state.username} />
        }
        else if(this.state.role === 'editor'){
            return <Editor username={this.state.username} />
        }
        else
        {
            return <User username={this.state.username} />
        }
    }
        else{
            return(
             <div>      
                <h1> Please Login</h1>
                <p>Don't you have an account,please create now!</p>  
            </div>
       )  
     } 
   }
}

export default Dashboard1
