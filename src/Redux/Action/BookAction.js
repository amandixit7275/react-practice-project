import React from "react";
import { purchaseBook } from "./BookType";

export default function BookAction() {
  return {
    type: purchaseBook,
  };
}
