import { WODs } from "./words";

export function getNormalisedTime(system) {
  var dateObj = new Date();
  if (system) {
    dateObj.setMinutes(dateObj.getTimezoneOffset() + dateObj.getMinutes());
  }
  return dateObj;
}
export function getNextWordleTime() {
  var dateNow = getNormalisedTime(true);
  var dateTomorrow = getNormalisedTime(true);
  dateTomorrow.setHours(dateTomorrow.getHours() + 24);
  dateTomorrow.setHours(0, 0, 0);
  //console.log(dateObj);
  return new Date(dateTomorrow - dateNow);
}

export function getTodayWord() {
  let offset = localStorage.getItem("offset") || 0;
  let dayNum = Math.round(
    (getNormalisedTime(true).getTime() - new Date("June 19 2021").getTime()) /
      (1000 * 3600 * 24)
  );
  console.log(dayNum, offset, Number(dayNum) + Number(offset));
  return WODs[Number(dayNum) + Number(offset)];
}
