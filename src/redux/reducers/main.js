import { combineReducers } from "redux";

import { cartreducer } from "./reducer";
import { wishlistreducer } from "./reducer";
const rootred = combineReducers({
  cartreducer,
  wishlistreducer,
});

export default rootred;
