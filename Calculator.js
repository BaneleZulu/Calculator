let power = document.getElementById("power");
let screen = document.getElementById("screen");

//ADDS ALL BUTTONS TO A COLLECTION
const buttons = [
  document.getElementById("ClearButton"), //0
  document.getElementById("deleteButton"), //1
  document.getElementById("divideButton"), //2
  document.getElementById("multiplyButton"), //3
  document.getElementById("subtractButton"), //4
  document.getElementById("additionButton"), //5
  document.getElementById("number9"), //6
  document.getElementById("number8"), //7
  document.getElementById("number7"), //8
  document.getElementById("number6"), //9
  document.getElementById("number5"), //10
  document.getElementById("number4"), //11
  document.getElementById("number3"), //12
  document.getElementById("number2"), //13
  document.getElementById("number1"), //14
  document.getElementById("number0"), //15
  document.getElementById("dot"), //16
  document.getElementById("equalButton"), //17
];

//Im trying to create function that enable the buttons of an turned-off calculator.
buttons.forEach((button) => (button.disabled = true));
let isPowerOn = false;
let light = document.getElementById("powerLight");

//CHANGES STATE OF THE CALCULATOR

document.addEventListener("DOMContentLoaded", () => {
  power.addEventListener("click", function () {
    alert("CLICKED");
    if (isPowerOn == false) {
      buttons.forEach((button) => (button.disabled = true));
      isPowerOn = true;
      screen.value = null;
      light.style = "Background: red"; // Issue: Use 'background' instead of 'Background'
    } else {
      buttons.forEach((button) => (button.disabled = false));
      isPowerOn = false;
      light.style = "Background: green"; // Issue: Use 'background' instead of 'Background'
    }
  });
});

/**BACKGROUND CONTROL CODE .... VERY REDUNDANT BUT STILL LIKE TO SEE IF I CAN PULL IT OFF**/
let backgroundControl = document.getElementById("background");
let imageControl = document.getElementById("image");
let isDarkModeOn = true;

//Elements to manipulate with color change....
let calculatorBody = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function () {
  backgroundControl.addEventListener("click", function () {
    alert("Please");
    if (isDarkModeOn == true) {
      imageControl.src = "night.png";
      controlCalculatorBackground(isDarkModeOn);
      isDarkModeOn = false;
    } else {
      imageControl.src = "sun.png";
      controlCalculatorBackground(isDarkModeOn);
      isDarkModeOn = true;
      calculatorBody.style = "Background: rgb(54,54,54)";
      screen.style = "Background: rgba(54,54,54)";
    }
  });
});

function controlCalculatorBackground(backgroundState) {
  if (backgroundState == true) {
    calculatorBody.style = "Background: rgb(240,240,230)";
    screen.style = "Background: rgba(240,240,230)";
    screen.style.color = "rgb(54, 54, 54)";
    buttons[0].style = "Background: rgb(230,230,220)";
    buttons[1].style = "Background: rgb(230,230,220)";
    buttons[6].style = "Background: rgba(230, 220, 220)";
    buttons[6].style.color = "rgb(54, 54, 54)";
    buttons[7].style = "Background: rgba(230, 220, 220)";
    buttons[7].style.color = "rgb(54, 54, 54)";
    buttons[8].style = "Background: rgba(230, 220, 220)";
    buttons[8].style.color = "rgb(54, 54, 54)";
    buttons[9].style = "Background: rgba(230, 220, 220)";
    buttons[9].style.color = "rgb(54, 54, 54)";
    buttons[10].style = "Background: rgba(230, 220, 220)";
    buttons[10].style.color = "rgb(54, 54, 54)";
    buttons[11].style = "Background: rgba(230, 220, 220)";
    buttons[11].style.color = "rgb(54, 54, 54)";
    buttons[12].style = "Background: rgba(230, 220, 220)";
    buttons[12].style.color = "rgb(54, 54, 54)";
    buttons[13].style = "Background: rgba(230, 220, 220)";
    buttons[13].style.color = "rgb(54, 54, 54)";
    buttons[14].style = "Background: rgba(230, 220, 220)";
    buttons[14].style.color = "rgb(54, 54, 54)";
    buttons[15].style = "Background: rgba(230, 220, 220)";
    buttons[15].style.color = "rgb(54, 54, 54)";
    buttons[16].style = "Background: rgba(230, 220, 220)";
    buttons[16].style.color = "rgb(54, 54, 54)";
  } else {
    calculatorBody.style = "Background: rgb(240,240,230)";
    screen.style = "Background: rgba(240,240,230)";
    screen.style.color = "rgb(54, 54, 54)";
    buttons[0].style = "Background: rgb(37, 37, 37)";
    buttons[0].style.color = "rgb(205, 215, 215)";
    buttons[1].style = "Background: rgb(37, 37, 37)";
    buttons[1].style.color = "rgb(205, 215, 215)";
    buttons[6].style = "Background: rgb(37, 37, 37)";
    buttons[6].style.color = "rgb(230, 220, 220)";
    buttons[7].style = "Background: rgb(37, 37, 37)";
    buttons[7].style.color = "rgb(230, 220, 220)";
    buttons[8].style = "Background: rgba(37, 37, 37)";
    buttons[8].style.color = "rgb(230, 220, 220)";
    buttons[9].style = "Background: rgba(37, 37, 37)";
    buttons[9].style.color = "rgb(230, 220, 220)";
    buttons[10].style = "Background: rgba(37, 37, 37)";
    buttons[10].style.color = "rgb(rgb(230, 220, 220)";
    buttons[11].style = "Background: rgba(37, 37, 37)";
    buttons[11].style.color = "rgb(rgb(230, 220, 220)";
    buttons[12].style = "Background: rgba(37, 37, 37)";
    buttons[12].style.color = "rgb(rgb(230, 220, 220)";
    buttons[13].style = "Background: rgba(37, 37, 37)";
    buttons[13].style.color = "rgb(rgb(230, 220, 220)";
    buttons[14].style = "Background: rgba(37, 37, 37)";
    buttons[14].style.color = "rgb(rgb(230, 220, 220)";
    buttons[15].style = "Background: rgba(37, 37, 37)";
    buttons[15].style.color = "rgb(rgb(230, 220, 220)";
    buttons[16].style = "Background: rgba(37, 37, 37)";
    buttons[16].style.color = "rgb(rgb(230, 220, 220)";
  }
}
