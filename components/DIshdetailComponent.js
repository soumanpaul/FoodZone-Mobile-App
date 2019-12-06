import React from 'react'
import { View, Text , ScrollView, FlatList, Modal,  StyleSheet, Button, PanResponder, Alert} from 'react-native'
import { Card, Icon, Rating, Input } from 'react-native-elements';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


const mapStateToProps = state => {
    return { 
        dishes: state.dishes,
        comments: state.comments,
        favorites:state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
});


class RenderDish extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            author: "",
            comment: "",
            rating: 3
        }    
    }

    handleViewRef = ref => this.view =  ref;
    toggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }
    handelComments() {
        this.toggleModal()
    }
    resetForm() {
        this.setState({
            showModal: false
        });
    }

    
    render() {

        const dish = this.props.dish;

        handleViewRef = ref => this.view  = ref;

        const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
            if(dx < -200) 
                return true;
            else 
                return false;    
        };
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => {
                return true;
            },
            // onPanResponderGrant: () => {
            //     this.view.rubberBand(1000)
            //         .then(endState => console.log(endState.finished ? 'finished' : 'cancelled'))
            // },  
            onPanResponderEnd: (e, gestureState) => {
                if (recognizeDrag(gestureState))
                    Alert.alert(
                        'Add to Favorites?',
                        'Are you sure you wish to add ' + dish.name + 'to you favorites?',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel pressed'),
                                style: 'cancel'
                            },
                            {
                                text: 'OK',
                                onPress: () => this.props.favorite ?  console.log('Already favorite') : this.props.onPress()
                            }
                        ],
                        { cancelable: false }
                    )
                    return true;
                
            }   
        });
    
    
        if(dish != null) {
            return (
                <Animatable.View animation="fadeInDown" duration={2000} delay={1000}
                    ref={this.hanleViewRef}
                    {...panResponder.panHandlers}>

                <Card
                    featuredTitle={dish.name}
                    image={{ uri: `http://192.168.2.23:3001/${dish.image}` }}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <Icon
                        raised
                        reverse
                        name={ this.props.favorite ? 'heart' : 'heart-o' }
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.props.favorite ?  console.log('Already favorite') : this.props.onPress()}
                        />
                    <Icon
                        raised
                        reverse
                        name='pencil'
                        type='font-awesome'
                        color='#5500FF'
                        onPress={() => this.handelComments() }
                        // onPress={() => props.onShowModal() }
                        />
                    <Modal
                         animationType={'slide'}
                         transparent={false}
                         visible={this.state.showModal}
                         onDismiss={() => {this.toggleModal(); this.resetForm()}}
                         onRequestClose= { () => {this.toggleModal(); this.resetForm() }}
                    >
                        <View style={styles.modal}>
                            <Rating showRating  />

                            <Input
                                placeholder='Author'
                                leftIcon={{ type: 'font-awesome', name: 'user' }}
                               
                                />
                            <Input
                                placeholder='Comment'
                                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                                />    
                            

                        <Button 
                            onPress={() => {this.toggleModal(); this.resetForm()}}
                            color="#512DA8"
                            title="Submit"
                            buttonStyle="padding: 10"
                                />
                        
                        <Button 
                            onPress={() => {this.toggleModal(); this.resetForm()}}
                            color="#512DA8"
                            title="Close"
                                />        
                        </View>
                    </Modal>    
                    
            </Card>
        </Animatable.View>
        );
    }else {
        return (<View></View>)
        }
    }
}


const styles = StyleSheet.create({
    formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index}) => {
        return(
            <View key={index} style={{margin: 10}} >
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }

    return (
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
        
        <Card title="Comments">
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()} 
                />
        </Card>
        </Animatable.View>
    )
}

class Dishdetail extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         favorites: []
    //     };
    // }

    markFavorite(dishId) {
        // this.setState({ favorites: this.state.favorites.concat(dishId)})
        this.props.postFavorite(dishId);
    }
    postComment(){
        console.log('write comment here')
    }
    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', '')

        return (
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]} 
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    postComment={() => this.postComment()}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);
