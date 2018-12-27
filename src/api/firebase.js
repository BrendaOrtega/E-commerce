import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDMWr1BhkiAdt1YN7TdkjqjvcfkSgMTvTc",
    authDomain: "commerce-91e5e.firebaseapp.com",
    databaseURL: "https://commerce-91e5e.firebaseio.com",
    projectId: "commerce-91e5e",
    storageBucket: "commerce-91e5e.appspot.com",
    messagingSenderId: "1058963767238"
  };
  firebase.initializeApp(config);
  export default firebase;

const FacebookProvider = new firebase.auth.FacebookAuthProvider();
const GoogleProvider =  new firebase.auth.GoogleAuthProvider();

export const facebookLogin = ()=>{
    return firebase.auth().signInWithPopup(FacebookProvider)
    .then(snap=>snap)
    .catch(e=>handleError(e));
};

export const googleLogin = () =>{
  return firebase.auth().signInWithPopup(GoogleProvider)
  .then(snap=>snap)
  .catch(e=>handleError(e));
}

export const firebaseLogout = () => {
  return firebase.auth().signOut();
}

function handleError(error){
    console.log(error);
    return error.message;
}