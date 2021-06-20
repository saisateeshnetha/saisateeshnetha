import React, { Component } from 'react'

class Clock extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
      this.timer = setInterval( () =>{
          this.setState ({
            time: new Date().toLocaleTimeString()
          })
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
   
    render() {
        //console.log("Render")
        return (
            <div>
            <h1>Time:{this.state.time}</h1>    
            </div>
        )
    }
}

export default Clock
