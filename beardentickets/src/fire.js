import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyB09_m17q5Fj-__A9LBoA3m3Zr6mi14UV8",
    authDomain: "oklahoma-749f7.firebaseapp.com",
    databaseURL: "https://oklahoma-749f7.firebaseio.com",
    projectId: "oklahoma-749f7",
    storageBucket: "oklahoma-749f7.appspot.com",
    messagingSenderId: "172663168257"
  };
var fire = firebase.initializeApp(config);
export default fire;