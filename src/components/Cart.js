import React, { Component } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    let element_Cart = this.props.Carts.map((product, index) => {
      return <CartItem index={index} product={product} key={index} />;
    });
    var sum_cart = this.props.Carts.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

    let count_cart = this.props.Carts.reduce((prev,cur)=> prev+cur.quantity,0)
    return (
      <div
        className="modal fade"
        id="largeShoes"
        role="dialog"
        aria-labelledby="modalLabelLarge"
        aria-hidden="true"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="modalLabelLarge">
                <i className="fas fa-cart-plus"></i> Giỏ hàng
              </h4>
            </div>

            <div className="modal-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng cộng</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody>{element_Cart}</tbody>
              </table>
              <p className="">
                <b className="text-primary">Số lượng: {count_cart}</b>
                <br />
                <b className="text-primary">Tổng tiền: {sum_cart}</b>
              </p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary form-control">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Carts: state.Carts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch("");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
