import React from 'react';
import { View, FlatList } from 'react-native';
import { Tile  } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return { 
        dishes: state.dishes
    }
}

class Menu extends React.Component {
  
    static navigationOptions = {
        title: 'Menu'
    }
    
    render(){
        
        const renderMenuItem = ({item, index}) => {
            return (
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={() => this.props.navigation.navigate('Dishdetail', { dishId: item.id })}
                        imageSrc={{ uri: `http://192.168.2.23:3001/${item.image}` }}
                      />
            );
        };
        
        // const { navigate } = this.props.navigation;
        if(this.props.dishes.isLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.dishes.isLoading.errMess){
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            )
        }
        else {
            return (
                <FlatList 
                    data={this.props.dishes.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
            );
        }
    }
}


export default connect(mapStateToProps)(Menu);