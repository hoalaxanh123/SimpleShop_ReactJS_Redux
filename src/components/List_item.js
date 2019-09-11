import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../Actions";
class List_item extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="thumbnail">
          <img src={product.image} alt="Yeah" />
          <center>
            <div className="caption">
              <h3>{product.name}</h3>
              <p>{product.des}</p>
              <p>
                <b>
                  Giá: <span>{product.price}</span> VND
                </b>
              </p>

              <p>
                <a href="#s" className="btn btn-primary">
                  Buy now
                </a>
                <a
                  href="#s"
                  className="btn btn-default mt-left5"
                  onClick={() =>
                    this.props.addToCard(product) 
                    
                  }
                >
                  Add to cart
                </a>
              </p>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    //  Cart: state.Carts
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCard: product => {
      dispatch(actions.addToCart(product));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List_item);
