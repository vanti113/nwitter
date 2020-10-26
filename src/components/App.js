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
  //위의 userObj는 모든 컴포넌트에서 활용될 가능성이 있기 때문에 항상 탑레벨에서 정의되어야 한다. 그래야 프롭스로 전달..
  //이것은 굉장히 중요한 이유인데, 탑레벨의 객체인 userObj가 하위레벨에서 변경되거나 갱신되면 모든 소속된 컴포넌트가 리렌더링이 된다. 이것이 하나의 소스를 통일하여
  //사용해야 하는 이유이다. 가령 프로필을 변경후 리렌더링을 시켜야 한다고 가정했을때, userObj의 내용을 갱신하는 것이 매우 중요한 키 포인트가 된다.

  useEffect(() => {
    //
    authService.onAuthStateChanged((user) => {
      //로그인이 되거나 유저에 관련된 상태가 바뀌면 authStateChanged가 호출이 될것이다.
      //onAUthStateChanged 는 로그인 혹은 로그아웃이 콜백을 만들거다. 그 콜백의 결과가 user객체
      if (user) {
        setIsLoggedIn(true);
        /*  setUserObj(user); // user객체는 엄청나게 크다. 따라서 아래의 리프레시유저 함수가 userObj를 임의로 리프레시 해도, 다 읽히지 않을수가 있다. ㄸ라서 필요한 부분만 가져오는게 더 좋다. */
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    //이 메소드의 목적은 하위레벨에서 userObj와 관련된 리렌더링의 트리거가 되게 하기 위함이다. 프롭스로 전달될 예정.
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    }); //여기서 문제가 발생되는데, 리액트가 너무 큰 오브젝트를 다루면 내부적으로 에러가 발생할수가 있다.
    //따라서,
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing...."
      )}
    </>
  );
}
//useEffect를 사용함으로서 모든 컴포넌트가 로딩이 완료 된 다음에 중요한 처리를 하는 방식.

export default App;
