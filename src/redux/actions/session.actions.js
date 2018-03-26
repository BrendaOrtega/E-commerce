import {facebookLogin, googleLogin, firebaseLogout} from '../../api/firebase';
import {facebookAuth, localAuth, googleAuth} from '../../api/express';
//const
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const LOCAL_LOGIN_SUCCESS = "LOCAL_LOGIN_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";


//actioncreators
function facebookLoginSucces(user){
    return {
        type:FACEBOOK_LOGIN_SUCCESS,
        user
    }
}

function googleLoginSucces(user){
    //console.log("dispatched")
    return {
        type:GOOGLE_LOGIN_SUCCESS,
        user
    }
}

function localLoginSuccess(user){
    return {
        type:LOCAL_LOGIN_SUCCESS,
        user
    }
}

function loginSuccess(user){
    return {
        type:LOGIN_SUCCESS,
        user
    }
}
//thunks

export const getUserFromLocalStorage = () => (dispatch)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) return dispatch(loginSuccess(user));
}

export const localLogin = (auth) => (dispatch) => {
    console.log(auth)
    return localAuth(auth)
    .then(res=>{
        if(!res) return alert("La cuenta no existe");
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
        return dispatch(localLoginSuccess(res.user));
    })
    .catch(e=>{
        console.log(e);
        return Promise.reject(e);
    })
}


export const faceLogin = () => (dispatch, getStore) => {
    return facebookLogin()
    .then(snap=>{
        let user = snap.user;
        user['access_token'] = snap.credential.accessToken;
        localStorage.setItem('access_token', JSON.stringify(user));
        return user;
        //console.log(user)
        //return dispatch(facebookLoginSucces(user))
    })
    .then(user=>{
        return facebookAuth(user.access_token)
    })
    .then(res=>{
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
        return dispatch(facebookLoginSucces(res.user));
    })
};

export const googLogin = () => ( dispatch, getStore) => {
    return googleLogin()
    .then(snap=>{
        let user = snap.user;
        user['access_token'] = snap.credential.accessToken;
        localStorage.setItem('access_token', JSON.stringify(user));
        return user;
        //console.log(user)
        //return dispatch(googleLoginSucces(user))
    })
    .then(user=>{
       // console.log(user);
        return googleAuth(user.access_token)
    })
    .then(res=>{
        console.log(res);
        if(!res) throw "error";
        localStorage.setItem('token', JSON.stringify(res.token));
        localStorage.setItem('user', JSON.stringify(res.user));
        return dispatch(googleLoginSucces(res.user));
    })
};

export const logout = () => (dispatch) => {
    firebaseLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({type:"LOGOUT_SUCCESS"})
}