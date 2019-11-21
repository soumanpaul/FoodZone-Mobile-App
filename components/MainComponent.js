import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DIshdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: { backgroundColor: "#512DA8"},
    headerTintColor: '#ffffff',
    headerTitleStyle: {color: "#fff"}
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

const ContactNavigator = createStackNavigator({
  Home: { screen: Contact },
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
const AboutNavigator = createStackNavigator({
  Home: { screen: About },
},{
  navigationOptions: {
      headerStyle: {
          headerBackgroundColor: "#512DA8"
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
const ContactContainer = createAppContainer(ContactNavigator);
const AboutContainer = createAppContainer(AboutNavigator);



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
  },
  Contact: {
    screen: ContactContainer,
    navigationOptions: {
      title: 'Contact Us',
      drawerLabel: 'Contact Us'
    } 
  },
  About: {
    screen: AboutContainer,
    navigationOptions: {
      title: 'About Us',
      drawerLabel: 'About Us'
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