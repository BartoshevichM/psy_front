import {combineReducers} from "redux"

import menu from './reducers/menu'
import input from './reducers/input'
import payment from "./reducers/payment";

export default combineReducers({ menu, input, payment })
