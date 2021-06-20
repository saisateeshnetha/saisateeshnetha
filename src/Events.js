import React, { Component } from 'react'

 class Events extends Component {

    someAction =() =>{
        console.log("hello")  
    }

    render() {
        return (
            <div>
               <h1>react Events</h1> 
               <button onClick={this.someAction}>click Here</button>
               <div className="box"></div>
            </div>
        )
    }
}

export default Events
