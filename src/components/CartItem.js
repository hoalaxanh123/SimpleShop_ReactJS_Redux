import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from "./../Actions";

class CartItem extends Component {
  render() {
    let index= this.props.index
    let product = this.props.product
    return (
      <tr>
        <td>{index+1}</td>
        <td>{product.name}</td>
        <td className='text-center'>
          <img src={product.image} className="img-responsive image-cart" alt={product.image} width="30px"/>
        </td>
        <td>{product.price}</td>
        <td>
          <span className="input-group">
            <b>{product.quantity}</b>
            <button type="button" className="btn btn-default mt-left5">
              +
            </button>

            <button type="button" className="btn btn-default mt-left5">
              -
            </button>
          </span>
        </td>
        <td>{product.price * product.quantity} VND</td>
        <td>
          <span className="input-group-btn">
            <button type="button" className="btn btn-danger" onClick={()=> this.props.delete_product_cart(product.id)}>
              Delete
            </button>
          </span>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    delete_product_cart: (product) => {
      dispatch(actions.delete_Product_Cart(product))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
