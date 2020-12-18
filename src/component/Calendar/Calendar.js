import React from "react";

import { getDayJs, getMonth, getYear } from "../js/privalDate";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

function Calendar() {
  const dayJs = getDayJs();

  return (
    <div>
      <CalendarHeader year={getYear(dayJs)} month={getMonth(dayJs)} />
      <CalendarBody dayJs={dayJs} />
    </div>
  );
}

export default Calendar;
