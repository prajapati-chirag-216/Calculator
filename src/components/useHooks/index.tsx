import React, { useCallback, useState } from "react";
import { ALLOWED_ACTIONS } from "../../utils/variables";

// useCalculation interface
interface useCalculationInterface {
  displayText?: string;
}

function useCalculation(props: useCalculationInterface) {
  const [displayText, setDisplayText] = useState<string>(
    props?.displayText || ""
  );
  const [displayResult, setDisplayResult] = useState<string>("");
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  // this will validate expression and then show on screen only valide expression
  const ValidateExpression = (prevText: string, txt: string) => {
    const lastChar = prevText.slice(-1);
    // this will make sure that two "." should not exist in "."
    if (txt == ".") {
      if (prevText.length == 0) {
        return "0.";
      }
      const revPrevText = prevText.split("").reverse().join("");
      const lastIndex = revPrevText.search(/[^0-9.]/g);
      const subText = prevText.slice(lastIndex != -1 ? -lastIndex : 0);
      if (lastIndex == 0) {
        return prevText + "0.";
      }
      if (subText.includes(".")) {
        return prevText;
      } else {
        return prevText + txt;
      }
    }

    // this will make sure that two Arithmetic signs should not come after another
    if (
      (txt != lastChar &&
        lastChar != "" &&
        ALLOWED_ACTIONS.includes(txt) &&
        !ALLOWED_ACTIONS.includes(lastChar)) ||
      !ALLOWED_ACTIONS.includes(txt)
    ) {
      return prevText + txt;
    } else {
      return prevText;
    }
  };

  // this will listen to button click
  const changeInputHandler = useCallback(
    (txt: string) => {
      if (isSubmited) {
        setDisplayText(displayResult);
        setIsSubmited(false);
      }
      // this will always get last value entered by user
      // if we don't add this then for buttons it will wrok fine
      // but for keyboard values it will give whole text value not a single char entered by user
      const inputText = txt.slice(-1);

      // leter we will se this
      if (/^[0-9+\/\-.*]+$/.test(inputText)) {
        setDisplayText((prevTxt) => {
          return ValidateExpression(prevTxt, inputText);
        });
      }
    },
    [displayText, isSubmited]
  );

  // this will update result
  const showResultHandler = useCallback(() => {
    const lastChar = displayText.slice(-1);
    if (ALLOWED_ACTIONS.includes(lastChar) || lastChar == "") {
      return;
    }
    try {
      const result = eval(displayText).toFixed(2);
      setDisplayResult(result);
      setIsSubmited(true);
    } catch (err) {
      setDisplayText("");
      setDisplayResult("Error");
    }
  }, [displayText, isSubmited]);

  // this will clear Disply
  const clearDisplayHandler = useCallback(() => {
    setDisplayText("");
    setDisplayResult("");
  }, []);

  // this will clear Text
  const clearTextHandler = useCallback(() => {
    const result = isSubmited
      ? displayResult.slice(0, -1)
      : displayText.slice(0, -1);
    if (displayText.length == 1) {
      setDisplayResult("");
    }
    if (isSubmited) {
      setIsSubmited(false);
    }
    setDisplayText(result);
  }, [displayText, displayResult]);

  // this are actions of calculator
  const actions = {
    onChange: changeInputHandler,
    onShowResult: showResultHandler,
    onClearDisplay: clearDisplayHandler,
    onClearText: clearTextHandler,
  };

  return [displayText, displayResult, actions] as const;
}

export default useCalculation;
