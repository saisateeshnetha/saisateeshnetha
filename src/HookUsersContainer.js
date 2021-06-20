import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUsers } from './redux/users/userAction';

function HookUsersContainer() {
    const users = useSelector ( state =>state.users )
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(fetchUsers())
    },)

    console.log(users)

    return (
        <div>
            <h1>Users List Hooks</h1>
        </div>
    )
}

export default HookUsersContainer
