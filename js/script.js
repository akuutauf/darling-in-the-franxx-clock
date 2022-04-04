// Function time
function realtimeClock() {
  var rtClock = new Date();

  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();

  // Add AM and PM System
  var amPm = hours < 12 ? "AM" : "PM";

  // Connect the hours component to 12-hour format
  hours = hours > 12 ? hours - 12 : hours;

  // Pad the hours, minutes and seconds with leading zero
  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  // Display the clock
  document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds + " : (" + amPm + ")";
  var t = setTimeout(realtimeClock, 500);
}

function dateTime() {
  var calendar = new Date();

  var date = calendar.getDate();
  var day = calendar.getDay();
  var month = calendar.getMonth();
  var year = calendar.getFullYear();

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "TuesDay";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      "NoDay";
      break;
  }

  document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;
}
