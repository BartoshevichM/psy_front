import {combineReducers} from "redux"

import menu from './reducers/menu'
import input from './reducers/input'
import subscribeProgress from "./reducers/subscribeProgress";
import subscriberInfo from "./reducers/subscriberInfo";
import calendar from './reducers/calendar'

export default combineReducers({ menu, input, subscribeProgress, subscriberInfo, calendar })
