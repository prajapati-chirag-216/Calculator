import React, { ChangeEvent } from "react";
import "./index.css";
// display interface
interface displayInterface {
  displayText: string;
  displayResult: string;
  onTextChange: (x: string) => void;
  onClearText: () => void;
  onShowResult: () => void;
  onClearDisplay: () => void;
}
function Display(props: displayInterface) {
  // this will run when user click any button by mouse click
  const changeTextHandler = (eve: ChangeEvent<HTMLInputElement>) => {
    const inputValue = eve.target.value;
    props.onTextChange(inputValue);
  };

  // this will run when user click any keyboard button
  const listenKeyHandler = (eve: React.KeyboardEvent<HTMLInputElement>) => {
    const key = eve.key;
    switch (key) {
      case "Backspace":
        eve.preventDefault();
        return props.onClearText();
      case "c":
        eve.preventDefault();
        return props.onClearDisplay();
      case "Enter":
      case "=":
        eve.preventDefault();
        return props.onShowResult();
      default:
    }
  };

  return (
    <div className="text-right w-100 h-[11rem] bg-[#a2af77] rounded-[1.2rem] text-5xl font-semibold p-4 flex flex-col justify-between">
      <div>
        <input
          value={props.displayText}
          type="text"
          id="displayInp"
          onKeyDown={listenKeyHandler}
          onChange={changeTextHandler}
          className="text-right bg-transparent"
        />
        <span className="after:content-['|'] after:animate-[blink_1s_ease-in-out_infinite]" />
      </div>
      <span className="text-6xl">{props.displayResult}</span>
    </div>
  );
}

export default Display;
