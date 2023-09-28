import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyCzUXgohEtBeYMeF13ojAx8pigTUPkhCZ8",
  authDomain: "realandinfra.firebaseapp.com",
  projectId: "realandinfra",
  storageBucket: "realandinfra.appspot.com",
  messagingSenderId: "745990074156",
  appId: "1:745990074156:web:71a7aeca8e0ba23c010689",
  measurementId: "G-BDH578T3TK",
};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ld_2l4oAAAAAKe2CSS1q9hKNMMSytDzkxWoeow1"),
  isTokenAutoRefreshEnabled: true,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
