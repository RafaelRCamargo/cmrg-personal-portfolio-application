import React from "react";
import CssColorInput from "../Misc/CssColorInput";
import CssComment from "../Misc/CssComment";

const TextEditor = () => {
  return (
    <div className="text-editor">
      <span className="css">
        <CssComment title={"Hey, you may change things here!"} />
        <CssComment title={"No worries."} />
        <br />
        <span className="css-tag">:root</span> {"{"}
        <div className="var--background">
          <CssComment title={"Main Black Color"} />
          <CssColorInput color={`black`} />
          <br />
          <CssComment title={"Main White Color"} />
          <CssColorInput color={`white`} />
          <br />
          <CssComment title={"Accent Color"} />
          <CssColorInput color={`accent`} />
        </div>
        {"}"}
      </span>
    </div>
  );
};

export default TextEditor;
