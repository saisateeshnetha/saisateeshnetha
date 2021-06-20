import React, { Component } from 'react'

export class Calc extends Component {
    price = 599;
    dis = 10;

    render() {
        return (
            <div>
                <h1>shirt Rs.{this.price}</h1>
                <h2>After discount {this.dis}% The price
                 is:{ Math.round(this.price - (this.price*this.dis/100)) }</h2>
            </div>
        )
    }
}

export default Calc

