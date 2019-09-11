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

if (
  localStorage.getItem("productCart") &&
  localStorage.getItem("productCart").length !== 0
) {
  listInStorge = JSON.parse(localStorage.getItem("productCart"));
} else {
  localStorage.removeItem("productCart"); //Xoá
  localStorage.setItem("productCart", JSON.stringify(listInStorge)); //Tạo mới và Để lại vào trong local storage
  listInStorge = JSON.parse(localStorage.getItem("productCart")); // Lấy lại từ trong local storage
}
var initialState = listInStorge;

let add_to_cart = (state, action) => {
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

let delete_Product_Cart = (state, action) => {
  try {
    console.log("action :", action);
    let id = action.product_id;
    var index = state.findIndex(x => x.id === id);
    state.splice(index, 1);
    localStorage.setItem("productCart", JSON.stringify(state));
    Message("Đã xoá thành công", "success");
  } catch (error) {
    Message("Sảy ra lỗi: " + error, "warning");
  }
};
let clear_Cart = (state) => {
  state.length=0
  localStorage.setItem("productCart", JSON.stringify(state));
  Message('Cảm ơn bạn đã mua sắm tại shop<br/>Chúc bạn có những phút giây mua sắm thoải mái!', "success");
  return state
};

let update_Cart = (state, action) => {
  try {
    console.log("action :", action);
    let hanhDong =
      action.quantity > 0 ? "Thêm một sản phẩm" : "Xoá một sản phẩm";
    let index = state.findIndex(item => item.id === action.product_id);
    if (index === -1) {
      Message("Sảy ra lỗi: sản phẩm không tìm thấy", "error");
      return state;
    }
    let soLuong = state[index].quantity + action.quantity;
    if (soLuong <= 0 || soLuong >= 101) {
      Message("Đã đạt giới hạn số lượng: lớn hơn 1 và nhỏ hơn 100", "error");
      return state;
    }
    state[index] = {
      ...state[index],
      quantity: state[index].quantity + action.quantity
    };
    localStorage.setItem("productCart", JSON.stringify(state));
    Message(
      "Update giỏ hàng thành công:<br/>Tên sản phẩm: " +
        state[index].name +
        "<br/>Hành động: " +
        hanhDong,
      "success"
    );
  } catch (error) {
    Message("Sảy ra lỗi: " + error, "warning");
  }
  return state;
};
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
    case types.UPDATE_TO_CART:
      update_Cart(state, action);
      return [...state];
    case types.CLEAR_CART:
      clear_Cart(state);
      return [...state];
    default:
      return state;
  }
};

export default myPreducer;
