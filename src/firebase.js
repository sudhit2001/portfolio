import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC22rhtgc2BhA7CB8novDSx-tfQTrl-IsU',
  authDomain: 'portfolio-e629d.firebaseapp.com',
  projectId: 'portfolio-e629d',
  storageBucket: 'portfolio-e629d.appspot.com',
  messagingSenderId: '550419184342',
  appId: '1:550419184342:web:c432ff9171794ffa012777',
  measurementId: 'G-7ENNFNHT7S',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
