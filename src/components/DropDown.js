import React from "react";

function DropDown() {
  return (
    <div className="dropDown-container">
      <div className="dropDown-content">
        <select>
          <option>zavrsheni</option>
          <option>nezavrsheni</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
