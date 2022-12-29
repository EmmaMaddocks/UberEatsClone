import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDw6cjHZbhnLKlFtsoj0_eiyaszkCIj_qE",
	authDomain: "ubereatsclone-b3b7e.firebaseapp.com",
	projectId: "ubereatsclone-b3b7e",
	storageBucket: "ubereatsclone-b3b7e.appspot.com",
	messagingSenderId: "996165784135",
	appId: "1:996165784135:web:e0a6a636071f17287c1762",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
