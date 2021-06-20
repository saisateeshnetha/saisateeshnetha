import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function Sample2(props) {
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                <input type="text"
                id={item.key}
                value ={item.text}
                    onChange ={
                        (e) =>{props.setUpdate(e.target.value, item.key)}}/>
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash" 
                        onClick={ () => props.deleteItem(item.key)}/>
                         {/*<h6 className="time">{props.time}</h6>*/}        
                </span>
                </p>
            </div>
        })
    return (
        <div>
        <FlipMove duration={400} easing="ease-in-out">
        <div key={listItems}>
        {listItems}
        </div>
       </FlipMove>
       </div>
       
    )
}

export default  (Sample2)



