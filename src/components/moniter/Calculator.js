import React, { Component } from "react";

class Calculator extends Component {

    showOrders (orders) {
        if(!orders || orders.length == 0) {
            return <li className="text-right text-danger title">ซื้อสักอย่างสิคะ</li>
        }
        else {
            return orders.map(order =>{
                return (
                    <li className="text-right text-success title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm">x</button>
                    </li>
                )
            })
        }
    }

    render() {

        const { totalPrice, orders } = this.props;

        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled ">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-outline-success title">Confirm</button>
                <button className="btn btn-block btn-outline-danger title">Cancel</button>
            </ div>
        );
    }
}

export default Calculator;