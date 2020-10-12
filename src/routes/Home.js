import { dbService, fbInstance } from "fBase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
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
    dbService.collection("nweets").onSnapshot((Snapshot) => {
      const nweetArray = Snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createAt: fbInstance.firestore.Timestamp.now(), //Date.now()??
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
          value={nweet}
        />
        <input type="submit" value="Nwitter" />
      </form>
      <div>
        {nweets.map((nweet) => {
          return (
            <div key={nweet.id}>
              <h4>{nweet.text}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
