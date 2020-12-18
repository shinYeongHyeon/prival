import React from "react";

import "./css/calendarBodyCardsRow.css";
import CalendarBodyCard from "./CalendarBodyCard";

function CalendarBodyCardsRow() {
  return (
    <div className="calendar-body-cards-row">
      <CalendarBodyCard />
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">1</div>
          <div className="calendar-body-card-title-name"></div>
        </div>
        <div className="calendar-body-card-contents">
          <div className="calendar-body-card-content schedule-continuous">
            일정1
          </div>
        </div>
      </div>
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">2</div>
          <div className="calendar-body-card-title-name"></div>
        </div>
        <div className="calendar-body-card-contents">
          <div className="calendar-body-card-content schedule-continuous-end">
            일정1
          </div>
        </div>
      </div>
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">3</div>
          <div className="calendar-body-card-title-name">특별한 날2</div>
        </div>
        <div className="calendar-body-card-contents"></div>
      </div>
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">4</div>
          <div className="calendar-body-card-title-name">특별한 날</div>
        </div>
        <div className="calendar-body-card-contents"></div>
      </div>
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">5</div>
          <div className="calendar-body-card-title-name">특별한 날</div>
        </div>
        <div className="calendar-body-card-contents"></div>
      </div>
      <div className="calendar-body-card">
        <div className="calendar-body-card-title">
          <div className="calendar-body-card-title-date">6</div>
          <div className="calendar-body-card-title-name"></div>
        </div>
        <div className="calendar-body-card-contents">
          <div className="calendar-body-card-content schedule schedule-continuous-start schedule-continuous-end">
            일정3
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarBodyCardsRow;
