import {combineReducers} from "redux"

import menu from './reducers/menu'
import input from './reducers/input'

export default combineReducers({ menu, input })
