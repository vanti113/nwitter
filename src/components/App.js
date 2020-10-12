import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 위 코드의 isLoggedIn의 값은 바뀌질 않는다. 로그인해도. 따라서 아래와 같이 강제적으로 로그인 상태
  //를 바꿔주어야 한다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    //
    authService.onAuthStateChanged((user) => {
      //로그인이 되거나 유저에 관련된 상태가 바뀌면 authStateChanged가 호출이 될것이다.
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing...."
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}
//useEffect를 사용함으로서 모든 컴포넌트가 로딩이 완료 된 다음에 중요한 처리를 하는 방식.

export default App;
