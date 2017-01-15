
import { cardStackReducer, actions} from 'react-native-navigation-redux-helpers'
import { closeDrawer } from './drawer'

const {
  replaceAt,
  popRoute,
  pushRoute,
} = actions

export function navigateTo(route, homeRoute) {
  return (dispatch, getState) => {
    const navigation = getState().cardNavigation
    const currentRouteKey = navigation.routes[navigation.routes.length - 1].key

    if (navigation.routes[0].key === 'home')  homeRoute = 'home'

    dispatch(closeDrawer())

    if (!homeRoute) {
      dispatch(replaceAt(currentRouteKey, { key: route, index: 0 }, navigation.key))
    } else if (currentRouteKey !== homeRoute && route !== homeRoute) {
      dispatch(replaceAt(currentRouteKey, { key: route, index: 1 }, navigation.key))
    } else if (currentRouteKey !== homeRoute && route === homeRoute) {
      dispatch(popRoute(navigation.key))
    } else if (currentRouteKey === homeRoute && route !== homeRoute) {
      dispatch(pushRoute({ key: route, index: 1 }, navigation.key))
    }
  }
}

const initialState = {
  key: 'global',
  index: 0,
  routes: [
    {
      key: 'home',
      index: 0,
    },
  ],
}

export default cardNavigation = cardStackReducer(initialState)
