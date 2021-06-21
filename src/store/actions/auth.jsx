import firebase from'firebase';
import { Redirect } from 'react-router';
import * as at from './actionTypes';





///// see dispatch of authstart to understand working of redux workflow


export const authStart = () => {
  return {
    type: at.AUTH_START,
  }
}


export const authSuccess = (profile) => {
  return {
    type: at.AUTH_SUCCESS,
    user:profile
  }
}

export const authFail = (error) => {
  return {
    type: at.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: at.AUTH_LOGOUT,
  }
}



export const signup = (user) => {
    return async (dispatch)=>{
        const db = firebase.firestore();
        dispatch({
          type: at.AUTH_START,
          payload:{loading: true}
        });

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(data=>{                                               
            console.log(data);
            const record = {
              name: user.name,
              email: user.email,
              uid: data.user.uid,
              createdAt: new Date()
            }
            db.collection("users").doc(data.user.uid).set(record)
            .then((doc)=>{
              const profile = {
                name: user.name,
                id : data.user.uid
              }
              localStorage.setItem("user", JSON.stringify(profile));
              dispatch(authSuccess(profile));
            })
            .catch((e)=>{
              dispatch(authFail(e));
            });
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            dispatch(authFail(error));
            console.log(error);
          });
    
    }
}


export const login = (form) => {
  return async (dispatch) => {
    dispatch(authStart());
    firebase.auth().signInWithEmailAndPassword(form.email, form.password)
    .then((data) => {
      const profile = {
        id: data.user.uid,
        name: data.user.displayName
      }
      console.log(profile);
      localStorage.setItem("user", JSON.stringify(profile));
      dispatch(authSuccess(profile));
      console.log(data);
      console.log("Logged in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(authFail(error));
    });
  }
}

export const checkAuthState = () => {
  return (dispatch) => {
    const user = (localStorage.getItem("user"))? JSON.parse(localStorage.getItem("user")):null;
    if(user){
      dispatch(authSuccess(user));
    }
    else {
      dispatch(logout());
    }
  }
}