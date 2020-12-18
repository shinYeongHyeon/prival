import React from "react";

import "./css/calendarBodyDays.css";

function CalendarBodyDays() {
  return (
    <div className="calendar-body-days">
      <div className="calendar-body-day calendar-body-sunday">일</div>
      <div className="calendar-body-day">월</div>
      <div className="calendar-body-day">화</div>
      <div className="calendar-body-day">수</div>
      <div className="calendar-body-day">목</div>
      <div className="calendar-body-day">금</div>
      <div className="calendar-body-day calendar-body-saturday">토</div>
    </div>
  );
}

export default CalendarBodyDays;
