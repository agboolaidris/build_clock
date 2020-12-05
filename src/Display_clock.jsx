import React from "react";

function Display_clock({ convertToTime, clock_count, pause_play, isPlaying }) {
  return (
    <div id="timer">
      <div className="div">
        <h2 id="timer-label">Session</h2>
        <h2 id="time-left">{convertToTime(clock_count)}</h2>
      </div>
      <span id="start_stop" onClick={pause_play}>
        {isPlaying ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </span>
      <span id="reset">
        <i className="fas fa-sync-alt"></i>
      </span>
    </div>
  );
}

export default Display_clock;
