import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Menu from './MenuComponent';
import Dishdetail from './DIshdetailComponent';
import Home from './HomeComponent';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle:{ backgroundColor: '#FFF'},
    headerTitleStyle:{ color: 'green'},
    // headerStyle: { backgroundColor: "#512DA8"},
    headerTintColor: '#ffffff'
    // headerTitleStyle: {color: "#fff"}
  }
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
},{
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);

const MenuContainer = createAppContainer(MenuNavigator);
const HomeContainer = createAppContainer(HomeNavigator);

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home'
    }
  },
  Menu: {
    screen: MenuContainer,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu'
    } 
  }
}, {
  drawerBackgroundColor: "#D1C4E9"
}); 

const MainContainer = createAppContainer(MainNavigator);



class Main extends Component {

  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : 0 }}>
        <MainContainer />
      </View>
    );
  }
}
  
export default Main;