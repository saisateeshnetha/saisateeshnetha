import React from 'react'

function List(props) {

    console.log(props.subjects)

    return (
        <div>
            <h1>This is Functional Component | subjects list</h1>
            <ul>
               {
                   props.subjects.map( (item, index) =>(
                    <li key={index}>{item}</li>
                   ))
               }
            </ul>
        </div>
    )
}

export default List

