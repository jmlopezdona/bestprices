import React, {Component} from 'react'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'
import SplashScreen from 'react-native-splash-screen'
import {Alert} from 'react-native'
import {configureGoogleSignIn} from './features/login/services/authService'
import {navigateTo} from './reducers/navigation'
import {enableDrawer} from './reducers/drawer'

console.disableYellowBox = true

export default class Root extends Component {

  constructor() {
    super()
    this.state = {
      loading: true,
    }
    this.initialize()
  }

  async initialize() {
    try {
      const store = await configureStore()
      await configureGoogleSignIn()

      if (!(store.getState().user.isLogin)) {
        store.dispatch(enableDrawer())
        store.dispatch(navigateTo('login', 'home'))
      }

      this.setState({loading: false, store: store})
      SplashScreen.hide()
    }
    catch(error) {
      console.log(error)
      Alert.alert('Warning', 'Error in the application: ' + error)
    }
  }

  render() {
    if (this.state.loading) {
      return null
    } else {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      )
    }
  }

}
