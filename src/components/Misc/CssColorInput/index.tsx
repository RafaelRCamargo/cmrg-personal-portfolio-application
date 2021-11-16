import React from "react";

const CssColorInput = ({ color }: { color: string }) => {
  const setColor = (value: string, color: string) => {
    if (/^#[0-9A-F]{6}$/i.test("#" + color)) {
      document.documentElement.style.setProperty("--" + value, "#" + color);
    }
  };

  return (
    <div className="css-line">
      <span className="css-tag">color:</span>{" "}
      <div className="css-value">
        <div
          className="sample-box"
          style={{
            width: "24px",
            height: "24px",
            background: getComputedStyle(
              document.documentElement
            ).getPropertyValue(`--${color}`),
          }}
        ></div>
        <div className="css-input-container">
          <input
            type="text"
            maxLength={6}
            name={`${color}-color`}
            id={`${color}-color-input`}
            className="css-value-input"
            spellCheck={false}
            onChange={(e) => {
              console.log(
                e.target.value,
                /^#[0-9A-F]{6}$/i.test("#" + e.target.value)
              );
              setColor(color, e.target.value);
            }}
            defaultValue={getComputedStyle(document.documentElement)
              .getPropertyValue(`--${color}`)
              .replace(" ", "")
              .replace("#", "")}
          />
        </div>
      </div>
    </div>
  );
};

export default CssColorInput;
