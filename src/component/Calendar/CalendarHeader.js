import React from "react";

import "./css/calendarHeader.css";

function CalendarHeader({ year, month }) {
  return (
    <div className="calendar-header">
      <div className="calendar-header-item" id="calendar_header_left_arrow">
        &#60;
      </div>
      &nbsp;&nbsp;
      <div className="calendar-header-item" id="calendar_header">
        {year}년 {month}월
      </div>
      &nbsp;&nbsp;
      <div className="calendar-header-item" id="calendar_header_right_arrow">
        &#62;
      </div>
    </div>
  );
}

export default CalendarHeader;
