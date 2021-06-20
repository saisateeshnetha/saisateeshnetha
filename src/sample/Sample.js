import React, { Component } from 'react'
import '../sample/sample.css'
import  Sample2 from '../sample/Sample2'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class Sample extends Component {
    constructor(props) {
        super(props)  
        this.state = {
            items:[],
            currentItems:{
                text:'',
                key:''
            }    
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItems = this.addItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }

    componentDidMount(){
        let localStorageData=localStorage.getItem("ToDoList")
        let localStorageDataKeys=localStorage.getItem("ToDoListKeys")

        if(localStorageData!==null){
            let myArrData=localStorageData.split(',')
            let myArrDataKeys=localStorageDataKeys.split(',')
            let setArray=myArrData.map((ele,ind)=>{
                return {
                    text:ele,
                    key:myArrDataKeys[ind]
                }
            })
            this.setState({...this.state,items:setArray})
        }
    }
    componentDidUpdate(){
        console.log(this.state.items);
        let data=this.state.items.map((ele)=>{

            return ele.text
        })
        let datakey=this.state.items.map((ele)=>{

            return ele.key
        })
        let localStorageData=data.join(",")
        localStorage.setItem("ToDoList",localStorageData)
        let localStorageDataKey=datakey.join(",")
        localStorage.setItem("ToDoListKeys",localStorageDataKey)
     }
    handleInput(e){
        this.setState({
            currentItems:{
                text: e.target.value,
                key:Date.now()//.toLocaleTimeString()
            }
        })
    }
    addItems(e){
        e.preventDefault();
        const newItem = this.state.currentItems;
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItems:{
                    text:'',
                    key:''
                }
            })
        }
    }
 deleteItem(key){
     const filteredItems = this.state.items.filter(item =>
       item.key!==key);
       this.setState({
           items:filteredItems
       })
 }
 setUpdate(text, key){
     const items = this.state.items;
     items.map(item =>{
         if(item.key===key){
             item.text=text;
         }
         return null
     })
     this.setState({
         items: items
     })
    }
    
    render() {
        return (
            <div className="Main">
                <header>
                <h1 class className="heading">TO DO LIST</h1>
                    <form id="to-do-form" onSubmit={this.addItems}>                         
                        <input type="text" placeholder="Enter Text"
                        value={this.state.currentItems.text}
                        onChange={this.handleInput}/>
                        <button type="submit">Add</button>
                    </form>
                </header>
                <div className="listOverFlow">
                <Sample2 items = {this.state.items}
                deleteItem = {this.deleteItem}
                setUpdate = {this.setUpdate}
                ></Sample2>
                </div>
            </div>
        );
    }
}

export default Sample
