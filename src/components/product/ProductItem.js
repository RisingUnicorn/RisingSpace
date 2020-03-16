import React, { Component }  from "react"; 

class  ProductItem extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const {productName, unitPrice, thumbnail} = this.props.product;

        return(
            <div className="col-md-4 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">Product | {productName}</h5>
                <p className="title text-right text-success">Cost | {unitPrice} THB฿</p>
                <button className="btn btn-block btn-outline-primary title"  onClick={() => this.props.onAddorder(this.props.product)} >
                    BUY
                </button>
                <hr />
            </div>
        )
    }
}

export default ProductItem;