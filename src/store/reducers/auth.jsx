import {updateObject} from '../utitlity';
import * as at from '../actions/actionTypes';

const initialState = {
    user : null,
    error: null,
    loading:null
}

const authStart = (state,action) =>{
    return updateObject({
        ...state,
        loading:true
    })
}

const authSuccess = (state,action) =>{
    return updateObject({
        ...state,
        user:action.user,
        loading:false
    })
}

const authFail = (state,action) => {
    return updateObject({
        ...state,
        error: action.error,
        loading:false
    })
}

const authLogout = (state,action) => {
    return updateObject({
        ...state,
        user:null
    })
}


const authReducer = (state=initialState ,action) => {
    switch(action.type){
        case(at.AUTH_FAIL):
            return authFail(state,action);
        case(at.AUTH_START):
            return authStart(state,action);
        case(at.AUTH_SUCCESS):
            return authSuccess(state,action);
        case(at.AUTH_LOGOUT):
            return authLogout(state,action);
        default:
            return state;
    }

}

export default authReducer;