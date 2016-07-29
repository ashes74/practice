'use strict';

//(Hrs <int> Min <int>) -> degrees in float
function clockDegrees(hrs, mins) {
  //get the degrees swept by the min hand
  let minDegrees = 360/60*mins;
  //get the degrees swept by the hour hand + the minute offset
  let hourDegrees = 360/12*hrs + 360/12*mins/60;
  //return the absolute difference
  return Math.abs(hourDegrees - minDegrees);
}
