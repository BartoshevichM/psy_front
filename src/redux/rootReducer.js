import {combineReducers} from "redux"

import menu from './reducers/menu'
import input from './reducers/input'
import payment from "./reducers/payment";
import subscriberInfo from "./reducers/subscriberInfo";

export default combineReducers({ menu, input, payment, subscriberInfo })
