import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  /* 아래처럼 환경변수 process.env를 사용하여 키를 캡슐화할때에는 규칙이 있다.
리액트 환경 내부에서 사용시에는 반드시 REACT_APP_~  이런식으로 어두를 붙여야 한다. 그렇지 않으면 작동하지
않는다. 이것은 리액트가 프레임워크라서 그런것..
또한, 반드시 .env파일은 프로젝트 폴더 내의 최상위에 루트에 있어야 한다. */

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// export default firebaseConfig;
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth(); //이렇게 익스포트 하는 이유는 필요한 서비스 만을 꺼내기 위함이다.
export const fbInstance = firebase;
export const dbService = firebase.firestore();
