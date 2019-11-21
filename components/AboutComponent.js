import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView} from 'react-native'
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders'; 

class ContactComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }

    render() {

        const renderLeaders = ({item, index}) => {
            return (
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        leftAvatar={{ source: require('../assets/images/uthappizza.png')}}
                        
                      />
            );
        };

        return (
            <ScrollView>
                <Card title="Our History">
                <Text>Cards are a great way to display information, usually containing content and actions 
                    about a single subject. Cards can contain images, buttons, text and more
                </Text>
                
                
                <Text>Cards are a great way to display information, usually containing content and actions 
                    about a single subject. Cards can contain images, buttons, text and more
                </Text>
                
                </Card>
                <Card title="Corporate Leadership" >
                <FlatList 
                    data={this.state.leaders}
                    renderItem={renderLeaders}
                    keyExtractor={item => item.id.toString()}
                />
                </Card>                
            </ScrollView>
        )
    }
}
export default ContactComponent;