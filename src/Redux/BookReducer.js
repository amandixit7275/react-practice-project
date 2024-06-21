import React from "react";

const initialState = {
  noOfBooks: 50,
};

export default function BookReducer(state = { initialState }, action) {
  switch (action.type) {
    case "purchaseBook": {
      return { ...state, noOfBooks: state.noOfBooks - 1 };
    }
    default:
      return state;
  }
}
