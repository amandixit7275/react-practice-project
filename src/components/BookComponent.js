import React from "react";
import { useSelector } from "react-redux";
import BookReducer from "../Redux/BookReducer";

export default function BookComponent() {
  const  = useSelector(BookReducer);
  return <div>Book Component</div>;
}
