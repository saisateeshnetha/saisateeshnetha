import { USERS_FETCH_FAILURE, USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS } from "./usersTypes"

const intialState = {
    loading: false,
    users:[],
    error:''
}

const userReducer = (state = intialState, action) =>{
    switch(action.types){
        case USERS_FETCH_REQUEST:
            return{
                ...state,
                loading: true,
                users:[],
                error:''
            }
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload
                
            }
        case USERS_FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                users:[],
                error: action.payload
            }
        default: return state 
    }
}


export default userReducer;