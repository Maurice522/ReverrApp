function getCalender(month, year) {
  var montharr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var fulldayarr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var dayarr = [' S', ' M', ' T', ' W', 'Th', ' F', 'Sa'];
  var Tdays = new Date(year, month + 2, 0).getDate(); //total days in the current month
  var dt = new Date(year, month, 1);
  var startDay = dt.getDay(); //starting index of the month
  var outputD = [];
  var calender = [];

  // calender indent gap
  for (var k = 0; k < startDay; k++) {
    outputD.push('  ');
  }

  for (var i = 1; i < Tdays + 1; i++) {
    for (var j = outputD.length; j < 7; j++) {
      if (i < Tdays + 1) {
        i < 10 ? outputD.push(' ' + i) : outputD.push(i);
        i++;
      }
    }
    i--;
    //    console.log(outputD.join(' ')); // printing row by row
    calender.push(outputD);
    outputD = [];
  }
  // console.log(fulldayarr[startDay], 'Total days: ' + Tdays);
  return calender;
}

export const ShowCalander = (setmonth, setyear, setdaate) => {
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();
  var calender = getCalender(month + 2, year);

  {
    //printing calender

    var montharr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var fulldayarr = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var dayarr = [' S', ' M', ' T', ' W', 'Th', ' F', 'Sa'];
    var outputday = [];

    // console.log(montharr[month] + ' ' + year); // printing month and year

    setmonth(montharr[month]);
    setyear(year);

    for (var i = 0; i < 7; i++) {
      outputday.push(dayarr[i]); //printing days
    }
    //console.log(outputday);
    // setdaysname(dayarr);

    var output = [];
    for (var i = 0; i < calender.length; i++) {
      for (var j = 0; j < 7; j++) {
        output[j] = calender[i][j];
      }
      //console.log(calender); //printing dates
      setdaate(calender);
      output = [];
    }
  }
};
