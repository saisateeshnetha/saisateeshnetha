import React from 'react' 
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './redux/cake/cakeActions';

function HookCakesDisplay() {
    const numOfCakes = useSelector (state => state.cakes.numOfCakes)
    const dispatch = useDispatch(); 

    return (
        <div>
            <hr></hr>
            <h1>Hook No of Cakes - {numOfCakes} </h1>
            <button onClick={ () => dispatch(buyCake()) }>Buy Cake </button>
        </div>
    )
}

export default HookCakesDisplay

