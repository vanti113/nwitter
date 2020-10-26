import { authService, dbService } from "fBase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
  let history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyNweets = async () => {
    const nweets = await dbService
      .collection("nweets") //콜렉션의 이름
      .where("creatorId", "==", userObj.uid)
      .orderBy("createAt") //정렬에는 DB의 색인이 필요하다, 즉 인덱스가 필요한데...파이어베이스는 NOSQL이다보니 직접 색인등록을 해 주어야 한다.
      .get();
    console.log(nweets.docs.map((doc) => doc.data()));
  };
  /* 위의 메소드는 내 정보를 어떻게 필터링하는가에 대한 함수이다. firestore에 관한 인스턴스인 dbService는 내가 올린 데이터의 콜렉션을 제공한다.
콜렉션 안에는 콜렉션이름을 지정하여야 한다. 그 이름은 내가 파이어베이스에 설정한 콜렉션네임이다. 이게 콜렉션패스 된다. 그 다음, where메소드를 사용하는데,
쉽게 생각해서 콜렉션 안의 필드를 참조한다고 생각하자. 콜렉션 안의 creatorId 가 == 즉, 같은가...무엇과? 지금 이 컴포넌트가 프롭스로 받고 있는 userObj의 uid, 
즉 지금 로그인 해 있는 유저와 같은가, 에 대해 쿼리하고, 그 다음 get()으로 문서를 다운로드 하여 nweets에 데이터가 들어간다. 그 데이터는 도큐먼트속성이 있기 때문에 
docs프로퍼티 안에서 map을 통해 각각의 객체에 data()함수를 적용하여 실제로 사용할수 있는 객체로 반환된다.(map은forEach와 달라서 리턴 값이 있다.)
*/
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
    refreshUser();
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
        //photoUrl을 업로드 하는 건 숙제로
      });
    }
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          onChange={onChange}
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
