import React from "react";

// button interface
interface buttonInterface {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

// button component
function Button(props: buttonInterface) {
  return (
    <button
      onClick={props.onClick}
      className={`min-h-24 h-full bg-[var(--color-secondary)] hover:bg-[#48494a] rounded-sm shadow-xl active:shadow-sm active:scale-95 ${
        props?.className || ""
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
