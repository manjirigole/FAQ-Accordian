"use strict";

const questions = document.querySelectorAll(".question-div");

questions.forEach((question) => {
  const plusIcon = question.querySelector(".icon-plus");
  const minusIcon = question.querySelector(".icon-minus");
  const answer = question.querySelector(".answers");

  plusIcon.addEventListener("click", function () {
    answer.style.display = "block";
    plusIcon.style.display = "none";
    minusIcon.style.display = "inline";
  });

  minusIcon.addEventListener("click", function () {
    answer.style.display = "none";
    plusIcon.style.display = "inline";
    minusIcon.style.display = "none";
  });
});
