import * as firebase from 'firebase';

const config= {
  apiKey: "your key",
      authDomain: "goalhub-6ed46.firebaseapp.com",
      databaseURL: "https://goalhub-6ed46.firebaseio.com",
      projectId: "goalhub-6ed46",
      storageBucket: "goalhub-6ed46.appspot.com",
      messagingSenderId: "334159758992"
};

export const firebaseapp = firebase.initializeApp(config);

export const goalref = firebase.database().ref('goals');

export const completegoalref = firebase.database().ref('completegoals');
