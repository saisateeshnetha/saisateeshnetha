import { BUY_DRINK } from "./drinksTypes"

const initialState = {
    numOfDrinks: 50
}

const drinksReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_DRINK:
            return{
                ...state,
                numOfDrinks: state.numOfDrinks -1
            }
        default: return state;
    }

}

export default drinksReducer