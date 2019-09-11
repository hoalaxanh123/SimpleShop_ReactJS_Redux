import * as types from "./../Constants/ActionTypes";
// import Message from "./../components/Message";

var defaulList = [
  {
    id: 1,
    name: "Samsung Note 1",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 5,
    image: "/phones/phone1.jpg"
  },
  {
    id: 2,
    name: "Samsung Note 2",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 10,
    image: "/phones/phone2.jpg"
  },
  {
    id: 3,
    name: "Samsung Note 3",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 15,
    image: "/phones/phone3.jpg"
  },
  {
    id: 4,
    name: "Samsung Note 6",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 20,
    image: "/phones/phone4.jpg"
  },
  {
    id: 5,
    name: "Samsung Note 9",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 25,
    image: "/phones/phone5.jpg"
  },
  {
    id: 6,
    name: "Samsung Note 15",
    des: "Sản phẩm khủng long từ Samsung, giá cực rẻ",
    price: 30,
    image: "/phones/phone6.jpg"
  }
];
var listInStorge = {};

if (
  localStorage.getItem("productList") &&
  localStorage.getItem("productList").length !== 0
) {
  listInStorge = JSON.parse(localStorage.getItem("productList"));
} else {
  localStorage.removeItem("productList");
  localStorage.setItem("productList", JSON.stringify(defaulList));
  listInStorge = JSON.parse(localStorage.getItem("productList"));
}


// let DeleteID = (state, id) => {
//   var index2 = state.findIndex(x => x.id === id);
//   console.log("old: ", state);
//   state.splice(index2, 1);
//   console.log("new: ", state);
//   localStorage.setItem("taskList", JSON.stringify(state));
//   return state;
// };

// let ChangeStatus = (state, id) => {
//   var index = state.findIndex(x => x.id === id);
//   state[index] = {
//     ...state[index],
//     status: !state[index].status
//   };
//   localStorage.setItem("taskList", JSON.stringify(state));
//   return state;
// };
// let UpdateTask = (state, action) => {
//   console.log("AC:", action);
//   var index = state.findIndex(x => x.id === action.task.id);
//   let newJob = {
//     id: action.task.id,
//     name: action.task.name,
//     status: action.task.status
//   };
//   alert(
//     "Update:\n " +
//       state[index].name +
//       " - " +
//       state[index].status +
//       " ==> " +
//       newJob.name +
//       " - " +
//       newJob.status
//   );
//   state[index] = newJob;
//   localStorage.setItem("taskList", JSON.stringify(state));
//   return state;
// };
// let AddNewTask = (state, action) => {
//   let newJob = {
//     id: MakeSomeID(),
//     name: action.task.name,
//     status: action.task.status === "1" ? true : false
//   };
//   state.push(newJob);
//   localStorage.setItem("taskList", JSON.stringify(state));
//   alert("Added a new job:\n\n" + newJob.name + " - " + newJob.status);
//   return state;
// };

var initialState = listInStorge;
var myPreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_GETALL:
      return state;
    // case types.ADD_TASK:
    //   AddNewTask(state, action);
    //   return [...state];
    // case types.CHANGE_STATUS:
    //   state = ChangeStatus(state, action.id);
    //   return [...state];
    // case types.DELETE_TASK:
    //   state = DeleteID(state, action.id);
    //   return [...state];
    // case types.RESET_LIST:
    //   state = ResetList();
    //   return [...state];
    // case types.UPDATE_TASK:
    //   state = UpdateTask(state, action);
    //   return [...state];
    // case types.SET_TASKLIST:
    //   state = action.tasks;
    //   return [...state];
    // case types.FIND_BY_KEYWORD:
    //   alert("filter by name");
    //   state = FilterName(state);
    //   return [...state];
    default:
      return state;
  }
};

export default myPreducer;
