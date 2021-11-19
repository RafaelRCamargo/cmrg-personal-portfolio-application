import React from "react";

const CssComment = ({ title }: { title: string }) => {
  return (
    <div className="css-comment" contentEditable="true" spellCheck="false">
      {"//"} {title}
    </div>
  );
};

export default CssComment;
