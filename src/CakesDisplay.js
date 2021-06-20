import React from 'react'
import { buyCake } from './redux/cake/cakeActions'
import { connect } from 'react-redux';

function CakesDisplay(Props) {
    return (
        <div>
            <h1>Number of Cakes - {Props.totalCakes}</h1>
            <button onClick = {Props.sellCake}>Buy Cake</button>
        </div>
    )
}
const mapStatetoProps = (state) =>{
    return{
        totalCakes: state.numOfCakes
    }
}
const mapStateToDispatch = dispatch =>{
    return{
        sellCake: () => dispatch(buyCake())
    }
}
export default connect(mapStatetoProps,mapStateToDispatch)(CakesDisplay)
