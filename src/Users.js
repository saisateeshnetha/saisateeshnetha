import React, { Component } from 'react'

export class Users extends Component {
      
    render() {
        console.log(this.props)

        return (
            <div>
            <h1>This class Component </h1>
            <h1>welcome to {this.props.newuser} from {this.props.city},{this.props.state}</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>mobile</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    this.props.userslist.map( (user,index) =>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.firstname}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.city}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
            <hr/>
            </div>
        )
    }
}

export default Users
