import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// Redux
import { Provider } from 'react-redux';

// Store
import store from './app/Store/store';

// Navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

// Screens
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    DashBoard: {
      screen: DashBoard
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const Nav = createAppContainer(AppNavigator);

//Import Pages
import Login from './app/pages/Login/Login';
import DashBoard from './app/pages/DashBoard/DashBoard';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
