/**
 * Провести code review и исправить ошибки
 */

import React, { useState } from "react";
import ReactDOM from "react-dom";

const usersList = [
  { name: "Bob" },
  { name: "Jack" },
  { name: "Nick" },
  { name: "Adolf" },
  { name: "Kate" },
  { name: "Jack" }
];

function App() {
  const [activeElement, setActiveElement] = useState(0);

  return (
    <div>
      <ul>
        {(usersList || [{}]).map((user, index) => (
          <ListElement
            key={index}
            user={{ ...user, active: activeElement === index }}
            onSetActiveClick={() => {
              setActiveElement(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

const ListElement = ({ user, onSetActiveClick }) => {
  return (
    <li>
      {user.name} {user.active && "(active)"}
      <Button text="set active" onClick={onSetActiveClick} />
    </li>
  );
};

const Button = ({ text, onClick }) => {
  console.log("button rerender");
  return <button onClick={onClick}>{text}</button>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
