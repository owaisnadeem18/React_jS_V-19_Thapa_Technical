import React, { useState } from "react";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const [isOn, SetIsOn] = useState(false);

  const ToggleBtnFunc = () => {
    SetIsOn(!isOn);
  };

  const stylingBtn = isOn ? "on" : "off";

  return (
    <>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "#4caf50" : "" }}
        onClick={ToggleBtnFunc}
      >
        <div className={`switch ${stylingBtn}`}>
          <span className="switch-state">
            {/* Use of State Variable inside it */}
            {stylingBtn}
          </span>
        </div>
      </div>
    </>
  );
}
