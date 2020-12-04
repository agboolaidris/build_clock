import React from "react";

function Set_clock() {
  return (
    <div id="setting">
      <div id="type">
        <h2>Pamodoro Clock's</h2>
      </div>
      <div id="break">
        <h2 id="break-label">Break Length</h2>
        <span id="break-decrement">
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </span>
        <span id="break-length">5</span>
        <span id="break-increment">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
      <div id="session">
        <h2 id="session-label">Session Length</h2>
        <span id="session-decrement">
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </span>
        <span id="session-length">25</span>
        <span id="session-increment">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Set_clock;
