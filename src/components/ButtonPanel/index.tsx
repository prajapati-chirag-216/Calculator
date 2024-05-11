import React from "react";
import Button from "../Button";

// buttonPanel interface
interface buttonPanelInterface {
  onChange: (x: string) => void;
  onShowResult: () => void;
  onClearDisplay: () => void;
  onClearText: () => void;
}
function ButtonPanel(props: buttonPanelInterface) {
  const changeInputHandler = (txt: string) => {
    props.onChange(txt);
  };

  return (
    <div className="grid grid-cols-4 gap-6 text-white text-5xl font-semibold">
      <Button onClick={props.onClearDisplay} className="!bg-[#141414]">
        AC
      </Button>
      <Button onClick={props.onClearText} className="!bg-[#141414]">
        DE
      </Button>
      <Button
        onClick={changeInputHandler.bind(null, "/")}
        className="!bg-[#141414]"
      >
        /
      </Button>
      <Button
        onClick={changeInputHandler.bind(null, "*")}
        className="!bg-[#141414]"
      >
        X
      </Button>

      <Button onClick={changeInputHandler.bind(null, "7")}>7</Button>
      <Button onClick={changeInputHandler.bind(null, "8")}>8</Button>
      <Button onClick={changeInputHandler.bind(null, "9")}>9</Button>
      <Button onClick={changeInputHandler.bind(null, "-")}>-</Button>
      <Button onClick={changeInputHandler.bind(null, "4")}>4</Button>
      <Button onClick={changeInputHandler.bind(null, "5")}>5</Button>
      <Button onClick={changeInputHandler.bind(null, "6")}>6</Button>
      <Button onClick={changeInputHandler.bind(null, "+")}>+</Button>
      <Button onClick={changeInputHandler.bind(null, "1")}>1</Button>
      <Button onClick={changeInputHandler.bind(null, "2")}>2</Button>
      <Button onClick={changeInputHandler.bind(null, "3")}>3</Button>
      <Button
        onClick={props.onShowResult}
        className="row-span-2 !bg-[#f1582a] hover:!bg-[#f1500a]"
      >
        =
      </Button>
      <Button
        onClick={changeInputHandler.bind(null, "0")}
        className="col-span-2"
      >
        0
      </Button>
      <Button onClick={changeInputHandler.bind(null, ".")}>.</Button>
    </div>
  );
}

export default ButtonPanel;
