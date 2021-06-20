import React from 'react'

function User(props) {
    return (
        <div>
           <h1>User</h1>
           <h4>welcome to {props.username}</h4>
           <p>Logout</p>
        </div>
    )
}

export default User
