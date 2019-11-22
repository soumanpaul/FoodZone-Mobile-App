import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


// actions for comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(res => {
            if (res.ok) {
                return res;
            } 
            else {
                var error = new Error('Error ' + res.status + ':' + res.statusText);
                error.res = res;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message) 
            throw error;
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .then(error => dispatch(commentsFailed(error.message))) 
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


// actions for promos
export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(res => {
            if (res.ok) {
                return res;
            } 
            else {
                var error = new Error('Error ' + res.status + ':' + res.statusText);
                error.res = res;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message) 
            throw errMess;
        })
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addComments = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});



// actions for Leaders
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(res => {
            if (res.ok) {
                return res;
            } 
            else {
                var error = new Error('Error ' + res.status + ':' + res.statusText);
                error.res = res;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message) 
            throw errMess;
        })
        .then(res => res.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEDERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

// actions for Dishes
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());


    return fetch(baseUrl + 'dishes')
        .then(res => {
            if (res.ok) {
                return res;
            } 
            else {
                var error = new Error('Error ' + res.status + ':' + res.statusText);
                error.res = res;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message) 
            throw errMess;
        })
        .then(res => res.json())
        .then(dishes => dispatch(addComments(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addComments = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

