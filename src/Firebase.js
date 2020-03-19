import * as firebase from 'firebase'

const settings = {timestampsInSnapshots: true}

const firebaseConfig = {
  apiKey: 'AIzaSyCR_1v95wQ17VFs-VQiQP6M9yINiymHurs',
  authDomain: 'cataloguetestauto.firebaseapp.com',
  databaseURL: 'https://cataloguetestauto.firebaseio.com',
  projectId: 'cataloguetestauto',
  storageBucket: 'cataloguetestauto.appspot.com',
  messagingSenderId: '216948256923',
  appId: '1:216948256923:web:e29bfc6e1ef0e371e4163e',
  measurementId: 'G-8CXWFPLHSQ'
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings(settings)

export default firebase
