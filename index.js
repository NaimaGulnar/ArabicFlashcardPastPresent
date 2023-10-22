//importing the Past Tense Object and Present Tense Object from "./families.js"
import { pastObj, presentObj } from "./families.js";

//declaring the variables
let homePage = document.querySelector("#home-pg");
let homeBtn = document.querySelector(".home-btn");
let pastToPresent = document.querySelector("#p-pre");
let presentToPast = document.querySelector("#pre-p");
let cardsPagePast = document.querySelector("#cards-pg-p");
let cardsPagePresent = document.querySelector("#cards-pg-pr");
let cardTextPast = document.querySelector(".card-text-p");
let cardTextPresent = document.querySelector(".card-text-pr");
let showAnswerBtnPast = document.querySelector(".answer-p");
let showAnswerBtnPresent = document.querySelector(".answer-pr");
let nextCardBtnPast = document.querySelector("#next-btn-p");
let nextCardBtnPresent = document.querySelector("#next-btn-pr");

//on the home page, when clicked on "Past Tense to Present Tense" button, the corresponding page (of converting Past tense to Present Tense) will be displayed
pastToPresent.addEventListener("click", () => {
  cardsPagePast.style.display = "block";
  cardsPagePresent.style.display = "none";
  homePage.style.display = "none";
  homeBtn.style.display = "block";
});

//on the home page, when clicked on "Present Tense to Past Tense" button, the corresponding page (of converting Present tense to Past Tense) will be displayed
presentToPast.addEventListener("click", () => {
  cardsPagePresent.style.display = "block";
  cardsPagePast.style.display = "none";
  homePage.style.display = "none";
  homeBtn.style.display = "block";
});

//on the cards page, when clicked on the "Home" button, the home page will be displayed
homeBtn.addEventListener("click", () => {
  cardsPagePresent.style.display = "none";
  cardsPagePast.style.display = "none";
  homePage.style.display = "block";
  homeBtn.style.display = "none";
});

//PAST TENSE to PRESENT TENSE
//when clicked on the "Next" button, the next Past Tense Verb will be displayed
nextCardBtnPast.addEventListener("click", () => {
  cardTextPast.classList.remove("green");
  showAnswerBtnPast.style.display = "block";

  //generating random numbers in order to randomly get the Past Tense Verbs
  var randomNum = Math.floor(Math.random() * 14);
  var families = `f${randomNum + 1}`;
  var pastTense = pastObj[families][randomNum];
  cardTextPast.innerText = pastTense;

  //when clicked on the "Show Answer" button, the corresponding Present Tense Verb will be displayed
  showAnswerBtnPast.addEventListener("click", () => {
    cardTextPast.classList.add("green");
    let presentTense = presentObj[families][randomNum];
    cardTextPast.innerHTML = `(${presentTense})`;
  });
});

//PRESENT TENSE to PAST TENSE
//when clicked on the "Next" button, the next Present Tense Verb will be displayed
nextCardBtnPresent.addEventListener("click", () => {
  cardTextPresent.classList.remove("green");
  showAnswerBtnPresent.style.display = "block";

  //generating random numbers in order to randomly get the Present Tense Verb
  var randomNum = Math.floor(Math.random() * 14);
  var families = `f${randomNum + 1}`;
  var presentTense = presentObj[families][randomNum];
  cardTextPresent.innerText = presentTense;

  //when clicked on the "Show Answer" button, the corresponding Past Tense Verb will be displayed
  showAnswerBtnPresent.addEventListener("click", () => {
    cardTextPresent.classList.add("green");
    let pastTense = pastObj[families][randomNum];
    cardTextPresent.innerHTML = `(${pastTense})`;
  });
});
