import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyDrinks } from './redux/drinks/drinksActions'

function DrinksContainer() {

    const totalDrinks = useSelector (state => state.drinks.numOfDrinks)
    const drinkAction = useDispatch()

    return (
        <div>
            <hr></hr>
            <h1>Num of Drinks - {totalDrinks} </h1>
            <button onClick={ () => drinkAction(buyDrinks())}>Buy Drinks</button>
        </div>
    )
}

export default DrinksContainer
