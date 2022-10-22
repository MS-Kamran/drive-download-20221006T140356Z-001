//color change js
function changeStyle() {
  var element = document.getElementById("colorchange");
  element.style.backgroundColor = "#76EF00";
  element.style.color = "#040301";
  element.style.border = "5px solid #1A9FE4";
}
function changeStyle1() {
  var element = document.getElementById("colorchange");
  element.style.backgroundColor = "#1A9FE4";
  element.style.color = "#DCDEE1";
  element.style.border = "5px solid #F20000";
}
function changeStyle2() {
  var element = document.getElementById("colorchange");
  element.style.backgroundColor = "#F25A1D";
  element.style.color = "#040301";
  element.style.border = "5px solid #76EF00";
}
function changeStyle3() {
  var element = document.getElementById("colorchange");
  element.style.backgroundColor = "#F20000";
  element.style.color = "#DCDEE1";
  element.style.border = "5px solid #040301";
}

//Hero Converter
console.log("Average grade: ");
console.log(collection);
console.log(val);
console.log(collection === "Kilograms");

function myFunction() {
  const collection = document.getElementById("convertar").value;
  var val = document.getElementById("numb").value;

  //Code test
  //console.log("Average grade: ");
  //console.log(collection);
  //console.log(val);
  //console.log(collection === "Kilograms");

  if (collection === "Kilograms") {
    document.getElementById("output").innerHTML = val / 2.2046;
  } else {
    document.getElementById("output").innerHTML = val / 0.4536;
  }
}
