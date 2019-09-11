import React, { Component } from "react";
import ListItem from "./List_item";
import { connect } from "react-redux";

class ListProduct extends Component {
  render() {
    var elementTask = this.props.listProduct.map((product, index) => {
      return <ListItem
       key={product.id}
       product={product}
       />;
    });
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {elementTask}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log('state :', state);
  return {
    listProduct: state.Products
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch("actionCreator");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProduct);
