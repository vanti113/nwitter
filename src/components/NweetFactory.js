import { dbService, fbInstance, storageService } from "fBase";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //유니크한 아이디를 생성할때 매우 도움이 되는 모듈

const NweetFactory = ({ userObj }) => {
  const [attachment, setAttachment] = useState("");
  const [nweet, setNweet] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      //child를 생성해서 그 안에 패스를 설정한 다음(패스는 스토리지에 들어갈 자리이다.) 그 다음 레퍼런스를 얻어낸다.
      const response = await attachmentRef.putString(attachment, "data_url");
      //위의 과정을 통해 레퍼런스는 attachment의 데이터를 옵션으로(이 경우는 url) 지정한 스트링 폼의 형태로 스토리지에 저장되게 된다. 그 다음 그 결과를 객체로서 반환한다.
      attachmentUrl = await response.ref.getDownloadURL();
    }

    const nweetObj = {
      text: nweet,
      createAt: fbInstance.firestore.Timestamp.now(), //Date.now()??
      creatorId: userObj.uid,
      attachmentUrl,
    };
    //await를 쓰는 이유는 getDownloadURL()가 반환하는 객체가 프로미스라서 이다. 비동기 통신이 끝나면, url를 반환해 준다.

    await dbService.collection("nweets").add(nweetObj);
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    console.log(event.target.value);
    const theFile = files[0];
    // console.log(theFile);
    const reader = new FileReader();
    reader.addEventListener("loadend", (event) => {
      const {
        currentTarget: { result },
      } = event;
      console.log(event.currentTarget);
      setAttachment(result);
    });
    if (theFile !== undefined) {
      reader.readAsDataURL(theFile);
    }
    /* 이렇게 함으로서 결과값의 객체에 result가 포함되는데, 이게 어마어마하게 긴 url로 나온다. 근데 그 url을 브라우져에 붙여넣기 하면 실제로 사진을 볼수 있어!!!! 심지어는 인터넷 연결과는 상관이 없는 실행가능한 url 인거야!! 퍼킹 어썸~~~ 이걸 어떻게 활용할까? 문자열로서 데이터베이스에 저장하면 되려나? */
  };
  const onClearAttachment = () => {
    setAttachment(null);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="what's on your mind?"
        maxLength={120}
        value={nweet}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Nwitter" />
      {
        attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" alt="" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )
        //attachment에 스테이트의 값이 존재할때만 태그를 보이겠다는 코드. 이런게 중요하다.
      }
    </form>
  );
};

export default NweetFactory;
