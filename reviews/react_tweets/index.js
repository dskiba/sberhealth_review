/**
 * Провести code review и исправить ошибки
 */

import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const tweets = [
    { user: "FunnyUser", text: "Смешной твит" },
    { user: "DepressedUser", text: "Депрессивный твит" },
    { user: "SadUser", text: "Грустный твит" },
    { user: "Twit", text: "Твит про собеседование" }
  ];
  const [likedTweets, setLikedTweets] = useState([]);

  return (
    <div>
      <h1>Твитор</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <ListElement
            key={index}
            tweet={{ ...tweet, liked: likedTweets.includes(index) }}
            onLike={() => {
              setLikedTweets(
                likedTweets.includes(index)
                  ? likedTweets.filter((t) => t !== index)
                  : likedTweets.concat(index)
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

const buttonStyles = {
  background: 'transparent',
  border: 0,
  cursor: 'pointer'
}
const ListElement = ({ tweet, onLike }) => {
  return (
    <li>
      <div>@{tweet.user}</div>
      <div>{tweet.text}</div>
      <Button style={buttonStyles} text={tweet.liked ? "❤️" : "🤍"} onClick={onLike} />
    </li>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
