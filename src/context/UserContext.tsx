import { useState, createContext } from "react";

export const CursorContext = createContext({});

export const CursorProvider = (props: { children: any }) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <CursorContext.Provider
      value={{ cursorText, setCursorText, cursorVariant, setCursorVariant }}
    >
      {props.children}
    </CursorContext.Provider>
  );
};
