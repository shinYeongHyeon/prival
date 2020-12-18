import React from "react";

import "./css/calendarBodyCard.css";
import CalendarBodyCardTitle from "./CalendarBodyCardTitle";
import CalendarBodyCardContents from "./CalendarBodyCardContents";

function CalendarBodyCard() {
  return (
    <div className="calendar-body-card">
      <CalendarBodyCardTitle />
      <CalendarBodyCardContents />
    </div>
  );
}

export default CalendarBodyCard;
