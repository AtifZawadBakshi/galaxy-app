import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { wishlistreducer } from "./reducer";
import { comparereducer } from "./reducer";
const rootred = combineReducers({
  cartreducer,
  wishlistreducer,
  comparereducer,
});

export default rootred;
