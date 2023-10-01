import logo from './logo.svg';
import './App.css';

// import firebase from 'firebase/firebase-app';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGp1uDRk1YO-E3nkzldJz-Yj8bQqVUGdI",
  authDomain: "cra-firebase-92b8d.firebaseapp.com",
  projectId: "cra-firebase-92b8d",
  storageBucket: "cra-firebase-92b8d.appspot.com",
  messagingSenderId: "391604874612",
  appId: "1:391604874612:web:cfa5b8add6d42598a6d021"
};
let firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function SignIn() {
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      { user ? `hello ${user.email}` : <button onClick={signInWithGoogle}>Sign In</button>}
    </>
  );
}

function SignOut() {
  const [user] = useAuthState(auth);
  const signOutHandler = () => {
    signOut(auth);
  }
  return (
    <>
      Hello {user.email}
      <button onClick={signOutHandler}>Sign Out</button>
    </>
  )
}

function App() {
  const [user] = useAuthState(auth);


  return (
    <div className="App">
      <header className="App-header">
        { user ?  <SignOut /> : <SignIn />}
      </header>
      <section>
        <h1>Hello Firebase Auth</h1>
      </section>
    </div>
  );
}

export default App;
