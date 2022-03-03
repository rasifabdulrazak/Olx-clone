import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCX1vrBEfrJeQQ0z3O3MpSRmvhT5WMJJEc",
  authDomain: "demopurpose-f2c43.firebaseapp.com",
  projectId: "demopurpose-f2c43",
  storageBucket: "demopurpose-f2c43.appspot.com",
  messagingSenderId: "916787078457",
  appId: "1:916787078457:web:bc75da90fa6bfd1124f4e8",
  measurementId: "G-103YJ9PJZB"
};

  export default firebase.initializeApp(firebaseConfig)