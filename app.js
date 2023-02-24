// -------------------------------------Chapter No.14-------------------------------------

// Question no.1
// Ans:1
// var emptyArr = [ ];
// console.log(emptyArr);

// Question no.3
// Ans:3
// var stringArr = [""];
// console.log(stringArr);

// Question no.4
// Ans:4
// var numArr = [1, 2, 3, 4, 5];
// document.write(numArr);

// Question no.5
// Ans:5
// var boolArr = true
// document.write(boolArr);

// Question no.6
// Ans:6
// var mixArr = ["String", 1, null, undefined, true];
// console.log(mixArr);

// Question no.7
// Ans:7
// document.write("<h1>Qualifications:</h1>")
// var eduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "phD"];
// document.write("1) " + eduArr[0] + "<br />") ;
// document.write("2) " + eduArr[1] + "<br />") ;
// document.write("3) " + eduArr[2] + "<br />") ;
// document.write("4) " + eduArr[3] + "<br />") ;
// document.write("5) " + eduArr[4] + "<br />") ;
// document.write("6) " + eduArr[5] + "<br />") ;
// document.write("7) " + eduArr[6] + "<br />") ;
// document.write("8) " + eduArr[7]) ;

// Question no.8
// Ans:8
// var stdNames = ["Azhar", "Adeel", "Zaeem"];
// var stdScores = [480, 230, 320];
// var totalMarks = 500;
// document.write("Score of " + stdNames[0] + " is " + stdScores[0] + ". Percentage: " + stdScores[0]/totalMarks*100 +"%"+ "<br />");
// document.write("Score of " + stdNames[1] + " is " + stdScores[1] + ". Percentage: " + stdScores[1]/totalMarks*100 +"%"+ "<br />");
// document.write("Score of " + stdNames[2] + " is " + stdScores[2] + ". Percentage: " + stdScores[2]/totalMarks*100 +"%");

// Question no.9
// Ans:9
var askColor = prompt("Add Your Color");
var color = ["Red", "Green", "Blue"];

// color.unshift("Add Color");
// console.log(color);

// color.push("Add Color");
// console.log(color);

// color.unshift("Add 1st Color", "Add 2nd Color");
// console.log(color);

// color.shift();
// console.log(color);

// color.pop();
// console.log(color);

color.unshift(askColor)[1];
console.log(color);

