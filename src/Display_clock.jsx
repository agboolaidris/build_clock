import React from "react";

function Display_clock() {
  return (
    <div id="timer">
      <div className="div">
        <h2 id="timer-label">Session</h2>
        <h2 id="time-left">00:00</h2>
      </div>
      <span id="start_stop">
        <i class="fas fa-pause"></i>
        <i class="fas fa-play"></i>
      </span>
      <span id="reset">
        <i className="fa fa-refresh" aria-hidden="true">
          Rest
        </i>
      </span>
    </div>
  );
}

export default Display_clock;
