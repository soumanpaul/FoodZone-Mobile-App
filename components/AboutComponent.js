import React, { Component } from 'react'
import { Text, FlatList, ScrollView} from 'react-native'
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }
    

function History() {
    return (
        <Card
            title="Our History">
             <Text
                style={{margin: 10}}>
                Started in 2010, Ristorante con Fusion quickly established 
            </Text>

            <Text
                style={{margin: 10}}>
                The restaurant traces its humble beginnings to the Frying 
            </Text>
        </Card>
    );
}


class About extends Component {

    static navigationOptions = {
        title: 'About Us',
    };

    render() {
        const { params } = this.props.navigation.state;

        const renderLeaders = ({item, index}) => {
            return (
                    <ListItem
                        roundAvatar
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        subtitleNumberOfLines={15}
                        hideChevron={true}
                        leftAvatar={{source: {uri: baseUrl + item.image}}}
                    />
            );
        };
        
        return (
            <ScrollView>
                <History />
                <Card title="Corporate Leadership" >
                <FlatList 
                    data={this.props.leaders.leaders}
                    renderItem={renderLeaders}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>                
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);