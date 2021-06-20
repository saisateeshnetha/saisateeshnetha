import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import HookCakesDisplay from './HookCakesDisplay'
import DrinksContainer from './DrinksContainer'
import UsersContainer from './UsersContainer'
import HookUsersContainer from './HookUsersContainer'


function Hooks1() {
    return (
        <div>
         <Provider store={store}>
         <div className="container">
         <HookUsersContainer />
        <HookCakesDisplay />
        <DrinksContainer />
        <UsersContainer />
        </div>
        </Provider>
            
        </div>
    )
}

export default Hooks1
