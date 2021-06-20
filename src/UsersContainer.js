import React,{ useEffect } from 'react'
 import { connect } from 'react-redux'
import { fetchUsers } from './redux/users/userAction';

function UsersContainer( {usersData, fetchUsersList } ) {

   useEffect(() =>{
       fetchUsersList()
   })

    return usersData.loading ? (<h1>Loading.....</h1>): usersData.error ? (<h1>{usersData.error}</h1>):(
        <div>
               <h1>Users List</h1>
            {
                usersData.users.map( user => <p key={user.id}>{user.username}</p>)     
            }
        </div>
    )
}       
 const mapStateToProps =  state =>{
     return{
         usersData: state.users 
    } 
 }

 const mapDipatchToProps = dispatch =>{
     return{
         fetchUsersList: () =>dispatch(fetchUsers())
     }
 }

export default connect(mapStateToProps, mapDipatchToProps)(UsersContainer)
