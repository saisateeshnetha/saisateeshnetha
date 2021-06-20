import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("LifeCycleB- constuctor")
    }
    
    static getDerivedStateFromProps(){
        console.log("LifeCycleB- getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB- componentMidMount")
    }

    render() {
        console.log("LifeCycleB- render")
        return (
            <div>
                <h1>Life Cycle B Methods </h1>
            </div>
        )
    }
}

export default LifeCycleB
