"use strict";

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progressEl = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
let currectActive = 1;
const API_KEY = "AIzaSyCnhlnFtUstYR0wROTWgMBA4-DF4ejfPPU"

import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai'

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);


function validateForms() {
  var Q1 = document.forms["form1"]["Q1"].value;
  var Q2 = document.forms["form1"]["Q2"].value;
  var Q3 = document.forms["form1"]["Q3"].value;
  var Q4 = document.forms["form1"]["Q4"].value;
  var Q5 = document.forms["form2"]["Q5"].value;
  var Q6 = document.forms["form2"]["Q6"].value;
  var Q7 = document.forms["form2"]["Q7"].value;
  var Q8 = document.forms["form2"]["Q8"].value;
  var Q9 = document.forms["form2"]["Q9"].value;
  var Q10 = document.forms["form2"]["Q10"].value;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = ("Take the following responses to questions and generate a list of possible NHD topics for them; To the question 'What is one person in history you find fascinating or inspiring?' they responded, '" + Q1 +"'. To the question, ");
  const result = await model.generateContent(prompt);
  alert(result.response.text());
}

//============== Next Form===============
function nextOne() {
  form1.style.left = "-600px";
  form2.style.left = "25px";
  //next slide
  increamentNumber();
  // update progress bar
  update();
}
//=============== Back One==================
function backOne() {
  form1.style.left = "25px";
  form2.style.left = "600px";
  // back slide
  decreametNumber();
  // update progress bar
  update();
}
//============ Second Form=============
function nextTwo() {
  form2.style.left = "-600px";
  form3.style.left = "25px";
  //next slide
  increamentNumber();
  // update progress bar
  update();
  validateForms()
  
}
//=============== Back One==================
function backTwo() {
  form2.style.left = "25px";
  form3.style.left = "600px";
  // back slide
  decreametNumber();
  // update progress bar
  update();
}
//============= Progress update====================
function update() {
  circles.forEach((circle, indx) => {
    if (indx < currectActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    // get all of active classes
    const actives = document.querySelectorAll(".active");
    progressEl.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  });
}
//================== Increament Number===============
function increamentNumber() {
  // next progress number
  currectActive++;
  if (currectActive > circles.length) {
    currectActive = circles.length;
  }
}
//================ Decreament Number=================
function decreametNumber() {
  currectActive--;
  if (currectActive < 1) {
    currectActive = 1;
  }
}
//================= btn Events===================
const btnsEvents = () => {
  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");
  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");
  //next1
  next1.addEventListener("click", nextOne);
  // back1
  back1.addEventListener("click", backOne);
  //next 2
  next2.addEventListener("click", nextTwo);

  back2.addEventListener("click", BackTwo);
};
document.addEventListener("DOMContentLoaded", btnsEvents);
