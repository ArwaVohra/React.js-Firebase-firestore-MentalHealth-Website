import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC6qlSn24ZzBsGV_qxGeA_dVeVw3_g7hdE",
    authDomain: "always-there-for-you-e996c.firebaseapp.com",
    projectId: "always-there-for-you-e996c",
    storageBucket: "always-there-for-you-e996c.appspot.com",
    messagingSenderId: "647675776450",
    appId: "1:647675776450:web:e51af3aa921c2af66a5a5b",
    measurementId: "G-16QD5DLSSM"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




// const db = firebase.firestore();
// const doc = db.collection('Consulatnt').doc('gdpGrAsz6o712qjX2OsK');

// export { doc };