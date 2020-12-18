import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

export const getDayJs = () => dayjs();
export const getFirstOfMonthDayJs = (dayJs) => dayJs.startOf("M");
export const getLastOfMonthDayJs = (dayJs) => dayJs.endOf("M");
export const getYear = (dayJs) => dayJs.get("y");
export const getMonth = (dayJs) => dayJs.get("M") + 1;
export const getDate = (dayJs) => dayJs.get("D");
export const getDay = (dayJs) => dayJs.get("d");
