import firebase from "firebase/compat/app";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfb_w8o9TAJIuiCBMZuVj_VFBwFfCTjzI",
  authDomain: "canlab-ad204.firebaseapp.com",
  projectId: "canlab-ad204",
  storageBucket: "canlab-ad204.appspot.com",
  messagingSenderId: "893247361569",
  appId: "1:893247361569:web:e77ea2cba4e176467fc960",
  measurementId: "G-HSMH9CLLJ9",
};

// 개발모드
firebase.initializeApp(firebaseConfig);

export const analyticsLogEvent = (key: string, params?: {}) => {
  firebase.analytics().logEvent(key, params);
};

// export const setFirebaseUserProperties = (
//   comName: string,
//   adminNo: number,
//   adminName: string,
// ) => {
//   firebase.analytics().setUserProperties({
//     comName,
//     adminNo,
//     adminName,
//   });
// };
