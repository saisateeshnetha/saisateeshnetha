import { USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE } from "./usersTypes";
import axios from 'axios';

export const usersFetchSuccess = (users) => {
    return {
        type: USERS_FETCH_SUCCESS,
        payload: users
    }
}

export const usersFetchRequest = () =>{
    return{
        type: USERS_FETCH_REQUEST
    }
}
export const usersFetchFailure = (error) =>{
    return{
        type: USERS_FETCH_FAILURE,
        payload: error 
    }
}


export const fetchUsers = () =>{
    return(dispatch)=>{
        dispatch(usersFetchRequest())
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url).then(response=>{
            const users = response.data
            dispatch(usersFetchSuccess(users))
        }).catch(error => { 
            const errormsg = error.message
            dispatch(usersFetchFailure(errormsg))
        })
    } 
}