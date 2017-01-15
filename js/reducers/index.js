//import {combineReducers} from 'redux-immutable'
import {combineReducers} from 'redux'
import user from '../features/login/reducers/user'
import cardNavigation from './navigation'
import drawer from './drawer'

export default combineReducers({
  user,
  drawer,
  cardNavigation,
})
