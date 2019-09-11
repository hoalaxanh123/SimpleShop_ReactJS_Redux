import * as types from "./../Constants/ActionTypes";
import Message from "./../components/Message";

var listInStorge = [];
// let ResetList = () => {
//   localStorage.removeItem("productList");
//   localStorage.setItem("productList", JSON.stringify(listInStorge));
//   listInStorge = JSON.parse(localStorage.getItem("productList"));
//   return listInStorge;
// };

// let MakeSomeID = () => {
//   var today = new Date();
//   var date =
//     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   var time =
//     today.getHours() +
//     ":" +
//     today.getMinutes() +
//     ":" +
//     today.getSeconds() +
//     today.getMilliseconds();
//   var dateTime = date + " " + time;
//   return dateTime;
// };

if (localStorage.getItem("productCart") &&localStorage.getItem("productCart").length !== 0) {
  listInStorge = JSON.parse(localStorage.getItem("productCart"));
} else {
  localStorage.removeItem("productCart"); //Xoá
  localStorage.setItem("productCart", JSON.stringify(listInStorge)); //Tạo mới và Để lại vào trong local storage
  listInStorge = JSON.parse(localStorage.getItem("productCart"));// Lấy lại từ trong local storage
}
var initialState = listInStorge;

let add_to_cart= (state, action) => {
  try {
    let product = action.product;
    var index = state.findIndex(x => x.id === product.id);
    if (index === -1) {
      product.quantity = 1;
      state.push(product);
    } else {
      state[index] = {
        ...state[index],
        quantity: state[index].quantity + 1
      };
    }
    localStorage.setItem("productCart", JSON.stringify(state));
    Message(`Thêm ${product.name} vào giỏ hàng thành công!`, "success");
  } catch (error) {
    Message("Sảy ra lỗi: " + error, "warning");
  }
  return state;
};

let delete_Product_Cart=(state,action)=>{
  try {
    console.log('action :', action);
    let id=action.product_id
    var index = state.findIndex(x => x.id === id);
    state.splice(index,1)
    localStorage.setItem("productCart", JSON.stringify(state));
    Message("Đã xoá thành công", "success");
  } catch (error) {
    Message("Sảy ra lỗi: " + error, "warning");
  }
}
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      return state;
    case types.ADD_TO_CART:
      add_to_cart(state, action);
      return [...state];
    case types.DELETE_TO_CART:
      delete_Product_Cart(state, action);
      return [...state];
    default:
      return state;
  }
};

export default myPreducer;
