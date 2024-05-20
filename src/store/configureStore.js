import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";

export default function storeBuilder() {
  return configureStore({ reducer });
}
