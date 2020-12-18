import React from "react";

import "./css/calendarBody.css";
import CalendarBodyDays from "./CalendarBodyDays";
import CalendarBodyCards from "./CalendarBodyCards";

function CalendarBody({ dayJs }) {
  return (
    <div className="calendar-body">
      <CalendarBodyDays />
      <CalendarBodyCards />
    </div>
  );
}

export default CalendarBody;
