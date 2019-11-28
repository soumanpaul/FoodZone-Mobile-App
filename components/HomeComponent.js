import React, { Component } from 'react'
import { ScrollView, View,  Text, FlatList} from 'react-native';
import { Card, Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

function RenderItem(props) {
    const item = props.item;

    if (item != null) {
        return(
            <Card 
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{uri: baseUrl + item.image}}>
                
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        )
    } else {
        return(<View><Text>data not available</Text></View>)
    }
}

class Home extends Component{
 
    static navigationOptions = {
        title: 'Home'
    }
   
    render() {
        
        return (
            <ScrollView>
                <View><Text>Home Page</Text></View>
                {/* <RenderItem item={this.props.dishes.dishes.filter(dish => dish.featured)[0]} />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} /> */}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Home);