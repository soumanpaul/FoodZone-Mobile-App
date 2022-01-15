import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from "react-native";
// import NetInfo from "@react-native-community/netinfo";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Icon } from "react-native-elements";

import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DIshdetailComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Reservation from "./ReservationComponent";
import Favorites from "./FavariteComponent";
import Login from "./LoginComponent";

import { connect } from "react-redux";
import {
  fetchLeaders,
  fetchDishes,
  fetchComments,
  fetchPromos,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

// Menu stack navigator

const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: { backgroundColor: "#512DA8" },
      headerStyle: { backgroundColor: "#512DA8" },
      headerTintColor: "#ffffff",
      headerTitleStyle: { color: "#fff" },
    }),
  },

  Dishdetail: {
    screen: Dishdetail,
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#512DA8" },
      headerStyle: { backgroundColor: "#512DA8" },
      headerTintColor: "#ffffff",
      headerTitleStyle: { color: "#fff" },
    }),
  },
});

// Home stack navigator

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    }),
  },
});

// Contact stack navigator

const ContactNavigator = createStackNavigator({
  Home: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    }),
  },
});

// About stack navigator

const AboutNavigator = createStackNavigator({
  Home: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    }),
  },
});

// Reservation navigator

const ReservationNavigator = createStackNavigator({
  Reservation: {
    screen: Reservation,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    }),
  },
});

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          iconStyle={{ color: "white" }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
});

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: () => (
        <Icon
          name="menu"
          size={24}
          iconStyle={{ color: "white" }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
});

// A component to draw sidebar

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Food Zone</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

// Navigation container

const MenuContainer = createAppContainer(MenuNavigator);
const HomeContainer = createAppContainer(HomeNavigator);
const ContactContainer = createAppContainer(ContactNavigator);
const AboutContainer = createAppContainer(AboutNavigator);

// combining four navigation container to create Drawer Navigation

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        title: "Lgoin",
        drawerLabel: "Login",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Menu: {
      screen: MenuContainer,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactContainer,
      navigationOptions: {
        title: "Contact Us",
        drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={22}
            color={tintColor}
          />
        ),
      },
    },
    About: {
      screen: AboutContainer,
      navigationOptions: {
        title: "About Us",
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: "Reserve Table",
        drawerLabel: "Reserve Table",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name="cutlery"
            type="font-awesome"
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        title: "My Favorites",
        drawerLabel: "My Favorites",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name="heart"
            type="font-awesome"
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "#D1C4E9",
    contentComponent: CustomDrawerContentComponent,
  }
);

// Main navigation container

const MainContainer = createAppContainer(MainNavigator);

// Main component

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();

    // NetInfo.getConnectionInfo()
    //     .then((connectionInfo) => {
    //       ToastAndroid.show('Initital Network Connectivaty Type: '
    //       + connectionInfo.type + ', effectiveType:  ' + connectionInfo.effectiveType,
    //       ToastAndroid.LONG)
    //     });

    //     NetInfo.addEventListener( state =>  this.handleConnectivityChange(state))
  }

  // componentWillUnmount() {
  //   NetInfo.removeEventListener(state =>  this.handleConnectivityChange(state));
  // }

  // handleConnectivityChange = (connectionInfo) => {
  //   switch (connectionInfo.type) {
  //     case 'none':
  //         ToastAndroid.show('You are now offline!', ToastAndroid.LONG)
  //         break;
  //     case 'wifi':
  //         ToastAndroid.show('You are now connected to Wifi!', ToastAndroid.LONG)
  //         break;
  //     case 'cellular':
  //         ToastAndroid.show('You are now connected to  Cellular!', ToastAndroid.LONG)
  //         break;
  //     case 'unknown':
  //         ToastAndroid.show('You  now have an unknown connection ', ToastAndroid.LONG)
  //         break;
  //     default:
  //       break;
  //   }
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 1 : 0,
        }}
      >
        <MainContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
