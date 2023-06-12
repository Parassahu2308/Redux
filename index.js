// import redux from "redux"; //ES 5
// const redux = require("redux"); //ES 6
// const createStore = redux.createStore;
const { createStore } = require("redux");
const { combineReducers } = require("redux");
const { applyMiddleware } = require("redux");
const { logger } = require("redux-logger");

const BUY_CAKE = "BUY_CAKE";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake Action",
  };
}

const BUY_ICECREAM = "BUY_ICECREAM";
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "IceCream Action",
  };
}

// const initialSatate = {
//   numOfCake: 10,
//   numOfIceCream: 20,
// };

const CakeInitialSatate = {
  numOfCake: 10,
};

const IceCreamInitialSatate = {
  numOfIceCream: 20,
};

// const reducer = (state = initialSatate, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };

// default:
//   return state;
//   }
// };

const cakeReducer = (state = CakeInitialSatate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = IceCreamInitialSatate, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state:", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
