// Chapter 31-34 : DATE METHODS

// Q-1

    var currentDate = new Date();
    document.write(currentDate);

// Q-2
    var Month = ["Jan", "Feb", "Marach", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov"]
    var currentMonth = new Date().getMonth();
    alert("Current Month : " + Month[currentMonth]);
   

// Q-3


    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    var currentDay = new Date().getDay();
    alert("Today is " + day[currentDay]);
   


// Q-4

    var currentDay = new Date().getDay();
    var day = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

    if (day[currentDay] === "Sat" || day[currentDay] === "Sun") {

        document.write("Its about weekend vibes")
    }
    else {
        document.write("Its not fun day")

    }
  

// Q-5

  var currentDate = new Date().getDay();

    if (currentDate === 15 || currentDate < 16) {
        alert('First Fifteen Days of the month')
    } else {
        alert('Last Fifteen Days of the month')
    }


// Q-6

var currentDate = new Date();

document.write("Current Date : " + currentDate);
document.write("<br>")

var MidNightJan = new Date("jan 1, 1970").getTime();


var diff = currentDate - MidNightJan;
document.write("Elapsed Millisecond since January 1, 1970: " + diff);
document.write("<br>")

var Minutes = diff / (1000 * 60 * 60);

document.write("Elapsed Minutes since January 1, 1970: " + Minutes);



// Q-7

var date = new Date().getHours();
if (date >= 12) {
    alert("Its PM")
}
else {
    alert("Its Am")
}


// Q-8


    var date = new Date("Dec 31, 2020");
    document.write("Later Date" + date);
   

// Q-9

    var date = new Date("June 18, 2020");
    var current = new Date();
    var diff = current - date;

    var RamadanDaysPassed = Math.round( diff / (1000 * 60 * 60 * 24))
    alert(RamadanDaysPassed + " days have Passed since 1st Ramadan, 2020");


// Q-10

    var date = new Date("Jan 01, 2015");
    var current = new Date();
    var diff = current - date;

    var secPassed = Math.round(diff / (1000 * 60))
    document.write("On Refernce date " + date + "," + secPassed + "  Passed since begning of 2015");
   

// Q-11


    var dateTime = new Date("Jan 01, 2015 23:08:16")
    document.write("Current date" + dateTime)


    var beforeHr = new Date("Jan 01, 2015 22:08:16").getTime();

    dateTime.setTime(beforeHr)
    document.write("1 hour ago, it was " + dateTime)
   
// Q-12
    var user = prompt("Enter your year");

    var userYear = new Date(user).getTime();

    var currentYear = new Date().getTime();

    var diff = currentYear - userYear;
    var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

    document.write("Your age is : " + age + "<br>");
    document.write("Your birth year is : " + user);


// Q-13

    var currentDate = new Date();
    alert("Current date" + currentDate)

    var yearsBack = new Date("1992 Dec 05").getTime();

    currentDate.setTime(yearsBack);

    alert("30 years back it was" + currentDate);


// Q-14