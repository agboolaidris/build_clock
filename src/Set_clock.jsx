import React from "react";

function Set_clock({
  break_increment,
  break_count,
  break_decrement,
  session_count,
  session_increment,
  session_decrement,
  click,
}) {
  return (
    <div id="setting">
      <div id="type">
        <h2>Pamodoro Clock's</h2>
      </div>

      <div id="break">
        <h2 id="break-label">Break Length</h2>

        <span id="break-decrement" onClick={click && break_decrement}>
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </span>

        <i id="break-length">{break_count}</i>

        <span id="break-increment" onClick={click && break_increment}>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>

      <div id="session">
        <h2 id="session-label">Session Length</h2>
        <span id="session-decrement" onClick={click && session_decrement}>
          <i className="fa fa-arrow-down" aria-hidden="true"></i>
        </span>
        <i id="session-length">{session_count}</i>
        <span id="session-increment" onClick={click && session_increment}>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default Set_clock;
