const icons = document.querySelectorAll(".question-icon"),
  accordionBody = document.querySelectorAll(".answer"),
  questions = document.querySelectorAll(".question h3");

icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.parentElement.parentElement.lastElementChild.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    question.parentElement.lastElementChild.click();
  });
});
