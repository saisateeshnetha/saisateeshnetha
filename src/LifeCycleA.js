import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "sai"
             
        }
        console.log("LifeCycleA - constuctor")
    }
    
    static getDerivedStateFromProps(){
        console.log("LifeCycleA - getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA - componentMidMount")
    }

    UpdateName = () =>{
        this.setState({
            name: 'Reactjs'
        })  
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA - shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifeCycleA - getSnapshotBeforeUpdate ")
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA - ComponentDidUpdate")
    }

    render() {
        console.log("LifeCycleA - render")
        return (
            <div>
                <h1>Life Cycle A Methods-{this.state.name} </h1>
                <button onClick={this.UpdateName}>Update</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
