import React, { useEffect } from "react";
import Display from "../Display";
import ButtonPanel from "../ButtonPanel";
import useCalculation from "../useHooks";
import { applyLongShadow } from "../../utils/javascript";

function Calculator() {
  // this is a custome hook
  const [displayText, displayResult, actions] = useCalculation({
    displayText: "",
  });
  // this will console when component get's mount and unmount
  useEffect(() => {
    console.log("Calculator Component Loaded - Result ", displayResult || 0);

    // Get the element with the class ".calculator-shadow"
    const calculatorElement = document.querySelector(
      ".calculator-shadow"
    ) as HTMLElement;
    applyLongShadow(calculatorElement);

    return () => console.log("Calculator Component removed ");
  }, [displayResult]);

  return (
    <div className="calculator-shadow relative m-auto mt-24 w-[48rem] bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary-dark)] rounded-3xl px-9 py-11 flex flex-col gap-10 ">
      <Display
        displayText={displayText}
        displayResult={displayResult || "0"}
        onTextChange={actions.onChange}
        onClearText={actions.onClearText}
        onShowResult={actions.onShowResult}
        onClearDisplay={actions.onClearDisplay}
      />
      <ButtonPanel
        onChange={actions.onChange}
        onShowResult={actions.onShowResult}
        onClearDisplay={actions.onClearDisplay}
        onClearText={actions.onClearText}
      />
    </div>
  );
}

export default Calculator;
