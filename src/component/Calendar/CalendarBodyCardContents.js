import React from "react";

import "./css/calendarBodyCardContents.css";
import CalendarBodyCardContent from "./CalendarBodyCardContent";

function calendarBodyCardContents() {
  return (
    <div className="calendar-body-card-contents">
      <CalendarBodyCardContent />
      <div className="calendar-body-card-content schedule schedule-continuous-start schedule-continuous-end">
        일정2
      </div>
    </div>
  );
}

export default calendarBodyCardContents;
