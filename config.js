import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here 
 apiKey: "AIzaSyCLhvUJSlsG7qs9GXvKtnrL4q5oc2U9omk",
  authDomain: "complaint-3d939.firebaseapp.com",
  projectId: "complaint-3d939",
  storageBucket: "complaint-3d939.appspot.com",
  messagingSenderId: "731599372066",
  appId: "1:731599372066:web:8db51119a5bac9bcbfef7b",
  measurementId: "G-YWYLB1GQ59"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

