import { dbService } from "fBase";
import React, { useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false); // 에디팅 모드인지 아닌지를 알려주는 기준값
  const [newNweet, setNewNweet] = useState(nweetObj.text); //인풋의 텍스트 업데이트용
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you wanna delete this nweet??");
    console.log(ok);
    if (ok) {
      //delete nweet function
      console.log(nweetObj);

      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev); //말그대로 토글 기능

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet });
    //업데이트의 요구사항인 객체에는, 내 도큐먼트 상의 바꿀 필드 명이 들어가야 한다. 이 경우는 새로 업데이트 하는
    //트윗이 텍스트 필드이므로 반드시 그것을 지정해야 한다.
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              onChange={onChange}
              value={newNweet}
              require
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>{" "}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Update Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
