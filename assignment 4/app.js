// chapter 9 - 11


//Q:1 

function welcomeMessage() {
    var city = prompt("Enter a city - only Karachi");
    if ((city === " karachi" || city === "Karachi")) {
        alert("Welcome to city of lights")
    }
    else {
        alert("Invalid Input")
    }

}


// Q:2 

function genderMessage() {
    var gender = prompt("Enter a gender Male or Female: ");
    if ((gender === "male" || gender === "Male")) {
        alert("Hello Sir.")
    }

    else if ((gender === "female" || gender === "Female")) {
        alert("hello Ma'am.")
    }

    else {
        alert("Invalid Gender");
    }
}

function trafficLight() {
    var color = prompt("Enter a color which traffic follows - Red, Green, Yellow");
    if ((color === "red") || (color === "Red")) {

        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>Red</td>
            <td>Must Stop</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else if ((color === "yellow") || (color === "Yellow")) {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>${color}</td>
            <td>Ready to move</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else if ((color === "green") || (color === "Green")) {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>${color}</td>
            <td>Move now</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
          <td>${color}, Invalid Color</td>
            <td>No Message Found</td>
          </tr>      
        </tbody>
      </table>
     <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )

    }

}

// Q:3

function fuelMessage() {
    var fuel = +prompt("Enter a fuel remain in your car.");

    if (fuel < 0.25) {
        alert("Please refill the fuel in your car")
    }
    else {
        alert("No need to refill the fuel in your car")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// Q: 4

function runScript() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// Q:5

function MarksheetGrade() {

    document.write(
        `<style>
        @font-face {
            font-family:p-M ;
            src: url(assests/fonts/Poppins-Medium.ttf);
        }
       
        @font-face {
            font-family: p-l ;
            src: url(assests/fonts/Poppins-Light.ttf);
          }
        .marksheet_div {
            width: 60%;
            margin: 45px auto;
            text-align: left;
            /* border: 1px solid; */
            padding: 20px 35px;
            box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        }
        .marksheet_div h1{
            font-family:p-M ;
        }
        .marksheet_div h2{
            font-family: p-l ;;
        }
        </style>`
    )


    var StdObtainedSub1 = + prompt("Enter a obtain marks  of sub 1 : ");
    var StdObtainedSub2 = + prompt("Enter a obtain marks  of sub 2 :");
    var StdObtainedSub3 = + prompt("Enter a obtain marks  of sub 3 :");
    var totalMarksSub = + prompt("Enter a total marks of 3 subject :");

    var stdTotalObtMarks = StdObtainedSub1 + StdObtainedSub2 + StdObtainedSub3;

    var percentage = (stdTotalObtMarks / totalMarksSub) * 100;

    if (percentage >= 80) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade A-one</h2>
                <h2>Remarks : Excellent </h2>
            </div>
            <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        
        `)
    }
    else if (percentage >= 70) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade A</h2>
                <h2>Remarks : Good </h2>
                <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
            </div>
        
        `)
    }

    else if (percentage >= 60) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade B</h2>
                <h2>Remarks : You need to improve </h2>
            </div>
            <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        
        `)
    }
    else {
        document.write(`
            
        <div class="marksheet_div"> 
            <h1>Mark Sheet</h1>
           
            <h2>Total Marks : ${totalMarksSub}</h2>
            <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
            <h2>Percentage : ${percentage}%</h2>
            <h2>Grade : Fail </h2>
            <h2>Remarks : Sorry </h2>
        </div>
        <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
    
    `)

    }
}

// question 7

function guessGame() {
    var user = +prompt("Enter a number");
    var guessNo = 2;
    if (user === guessNo) {
        alert("Bingo! Correct answer")
    }
    else if (user === ++guessNo) {
        alert("Close enough to the correct answer")
    }
    else {
        alert("Sorry! Incorrect answer")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// question 8

function divisibleBy3() {

    var number = +prompt("Enter a number : ");
    if (number % 3 == 0) {
        alert('divisible by 3')
    }
    else {
        alert("not divisible by 3")

    }
}


// question 9

function evenOdd() {

    var number = +prompt("Enter a number : ");
    if (number % 2 == 0) {
        alert('Even Number')
    }
    else {
        alert("Odd Number")

    }
}


// question 10

function Temp() {

    var temp = prompt("Enter a temprature :");
    if (temp >= 40) {
        alert("It is too hot outside.")
    }
    else if ((temp >= 30)) {
        alert("The Weather today is Normal")
    }
    else if ((temp >= 20)) {
        alert("Today’s Weather is cool.")
    }
    else {
        alert("OMG! Today’s weather is so Cool.")
    }
}


// question 11

function calculator() {

    var num1 = +prompt("Enter a number 1")
    var num2 = +prompt("Enter a number 2")
    var opt = prompt("Enter an operator do you want to perfome (+,-,*,/,%");

    if (opt === "+") {

        var result = num1 + num2
        alert(`Addition of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "-") {

        var result = num1 - num2
        alert(`Subtraction of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "*") {

        var result = num1 * num2
        alert(`Multiplication of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "/") {

        var result = num1 + num2
        alert(`Division of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "%") {

        var result = num1 + num2
        alert(`Reminder of ${num1} & ${num2} is ${result}`)
    }
    else {
        alert("Invalid Operator")
    }
}

// Chapter 12 - 13

// Question 1

function ASCIIcode() {
    var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
    var asciiCode = userInput.charCodeAt(0);

    // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
    // A-Z (65 to 90)
    // a-z (97-122)
    // 0-9 (48-57)

    if (asciiCode >= 65 && asciiCode <= 90) {
        alert(userInput + " is a uppercase letter")
    }
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert(userInput + " is a Lowercase letter")
    }
    else if (asciiCode >= 48 && asciiCode <= 57) {
        alert(userInput + " is a number")
    }
    else {
        alert("Invalid Input")
    }

}


// Question 2

function findLarger() {
    var UserNumber1 = +prompt("Enter a number 1 ")
    var UserNumber2 = +prompt("Enter a number 2 ")

    if (UserNumber1 > UserNumber2) {
        alert(UserNumber1 + " is greater than " + UserNumber2)
    }
    else {
        alert(UserNumber2 + " is greater than " + UserNumber1)
    }
}


// Question 3

function numberFinder() {

    var numberFinder = +prompt("Enter a number : ")

    if (numberFinder > 0) {
        alert("Positive number")
    }
    else if (numberFinder < 0) {
        alert("Negative number")
    }
    else if (numberFinder === 0) {
        alert("Zero")
    }
    else {
        alert("Invalid Input")
    }
}


// Question 4

function vowelsFinder() {

    var cha = prompt("Enter a character (a-z, A-z)");

    if ((cha == "a") || (cha == "A") || (cha == "e") || (cha == "E") || (cha == "i") || (cha == "I") || (cha == "O") || (cha == "o") || (cha == "u") || (cha == "U")) {
        alert(true)
    }
    else {
        alert(false)
    }

}


// Question 5

function passwordChecker() {
    var actualPass = "FUUAST1SADIQ";
    var InputPass = prompt("Enter a Password");
    if (InputPass === actualPass) {
        alert("Correct! The password you entered matches the original password")
    }
    else if (InputPass == "") {
        alert("Please enter your password")
    }
    else {
        alert("Incorrect password")
    }
}


// Question 6

function ScriptCorrection() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting)
    }
    else {
        greeting = "Good evening";
        alert(greeting)
    }
}

// Question 7

function timeFind() {
    var userInput = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")
    if (userInput >= 0000 && userInput < 1200) {

        alert("Good Morning !")
    }
    else if (userInput >= 1200 && userInput < 1700) {
        alert("Good Afternoon !")
    }
    else if (userInput >= 1700 && userInput < 2100) {
        alert("Good Evening!")
    }
    else if (userInput >= 2100 && userInput < 2359) {
        alert("Good Night !")
    }
    else {
        alert("Invalid time format")
    }
}


// Chapter 14-16 ARRAY

// Question 1 

function literalArray() {

    var cities = [];
    alert("var cities = [ ] ;")
}

// Question 2

function objectArray() {

    arrayList = new Array()
    alert(" arrayList = new Array()")
}

// Question 3

function stringsArray() {

    var stringArray = ["Karachi", "Lahore", "Islambad"];
}

// Question 4


function NumberArray() {

    var numberArray = [1, 2, 4, 5, 6, 66, 67];
}


// Question 5 


function booleanArray() {

    var boolArray = [true, true, false, false];
}


// Question 6
function mixArray() {

    var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67, true, true, false, false];
}


// Question 7
function educationQualification() {

    var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

    document.write("<h1>Qualification</h1><br>")
    document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
    document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
    document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
    document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
    document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
    document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
    document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
    document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// Question 8

function marksheet() {
    var stdNames = ["Sadiq", "bilal", "Dany"];
    var stdScroes = [450, 340, 380];

    var perofStd1 = stdScroes[0] / 500 * 100;
    var perofStd2 = stdScroes[1] / 500 * 100;
    var perofStd3 = stdScroes[2] / 500 * 100;

    document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
    document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
    document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9 

function Initialize() {

    var colors = ["red", "green", "blue"];
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}
// Question 9a

function addcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the start.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 9b

function endcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the end.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.push(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9c

function addMoreColorStart() {
    var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
    var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput1, colorInput2);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9d

function deleteColorStart() {
    var colorInput = prompt("Enter a color  name which do you want to delete  at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.shift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9e 

function specificIndex() {
    var colors = ["red", "green", "blue"];
    var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
    var indexNumber = +prompt("which color do you want to add on that index? ");
    colors.splice(indexNumber, 0, colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9f 

function numberOfColorDelete() {
    var colors = ["red", "green", "blue"];
    var deleteIndex = +prompt("At which index do you want to delete color?")
    var colorDelete = +prompt("which color do you want to delete on that index?")
    colors.splice(deleteIndex, colorDelete);
    document.write(colors + "<br/>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 10

function arrayAscOrder() {

    var studentScores = [67, 87, 98, 97, 67, 80, 90];
    document.write("Scores of Students :  " + studentScores);

    document.write("<br>")

    var sortedScores = studentScores.sort()
    document.write("Ordered Scores of Students :  " + studentScores);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 11 

function CopyArray() {

    var citiesArray = ["karachi", "Queeta", "Peshawar", "lahore", "Islamabad"]
    var selectedCities = citiesArray.slice(2, 5);
    document.write("Cities List  : <br> " + citiesArray + "<br>");
    document.write("Cities List  : <br> " + selectedCities);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 12

function JoinArray() {

    var arr = ["This", "is", "my", "cat"];
    document.write("<h1>Array: </h1>");
    document.write(`<h1>${arr}</h1><br>`);

    var joined = arr.join(" ");

    document.write("<h1>String: </h1>");
    document.write(`<h1>${joined}</h1><br>`);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 13 

function FIFO() {

    var acc = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 14 


function LIFO() {

    var acc = ["Keyboard", "mouse", "printer", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 15 

function dropdown() {

    var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    document.write(`
        <div class="dropDown">
        <select>
            <option>${mobiles[0]}</option>
            <option>${mobiles[1]}</option>
            <option>${mobiles[2]}</option>
            <option>${mobiles[3]}</option>
            <option>${mobiles[4]}</option>
            <option>${mobiles[5]}</option>
        </select>
        </div>
        
        <style>
            @font-face {
                font-family:p-M ;
                src: url(assests/fonts/Poppins-Medium.ttf);
            }
           
            @font-face {
                font-family: p-l ;
                src: url(assests/fonts/Poppins-Light.ttf);
              }
              
            .dropDown{
                width:60%;
                margin:20px auto;
                text-align:center;
            }
            select {
                border: none;
                width: 40%;
                padding: 10px;
                font-size: 18px;
                box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
                font-family: p-l ;
            }
        </style>
    `)

}