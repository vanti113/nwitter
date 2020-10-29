import { dbService, fbInstance, storageService } from "fBase";
import React, { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);

  /*  const getNweets = async () => {
    const dbNweets = await dbService.collection("nweets").get();
    dbNweets.forEach((docu) => {
      const nweetObject = {
        ...docu.data(),
        id: docu.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
      /*  setNweets((prev) => [docu.data(), ...prev]);
      //위의 코드가 내 앱을 만드는데 상당히 도움이 될것 같다.
      //일단 저위의 뜻은, 현재 setNweet가 가리키는 nweets의 값을 참조인수로 하여, docu.data()를 통해 풀려난 값을 배열의 제일 처음으로 넣고, 그 다음 이전 nweets의 값(prev)을 그 뒤에 전부 풀라는 명시이다.
      //이 코드를 숙지하자..스테이트를 사용시 매우 유용할것 
    });
  }; */
  useEffect(() => {
    // getNweets();
    //onSnapshot은 기본적으로 디비에 무언가 일이 있을때 알림을 준다. 즉, 리스너이다.
    //별도로 추가한 아이디는 컬렉션의 아이디이다.
    //useEffect는 스테이트가 변했을때, 즉 렌더링이 되었을때 작동하므로, 트윗에 변화가 있다면, 밑의 onSnapshot이 그 변화를 감지할것이다.
    dbService.collection("nweets").onSnapshot((Snapshot) => {
      const nweetArray = Snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNweets(nweetArray);
    });
  }, []);

  return (
    <div>
      <NweetFactory userObj={userObj} />
      <div>
        {nweets.map((nweet) => {
          return (
            <Nweet
              key={nweet.id}
              nweetObj={nweet}
              isOwner={nweet.creatorId === userObj.uid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
