import React, { Component } from 'react'

class Dashboard extends Component {

    constructor(props) {
        super(props)
    
        
        this.state = {
             username : 'saisateesh',
             isUserLoggedIn : false,
        }
    }
    
    render() {
        if(this.state.isUserLoggedIn === true){
        return(
            <div>
              <h1> welcome to {this.state.username}</h1>
              <p>Logout</p>  
            </div>
             )
        }
        else
        {
            return(
                <div>
                  <h1>Please Login</h1>
                  <p>Don't you have an account please an account!</p>
                </div>
               )
            }
        }
    }


export default Dashboard
