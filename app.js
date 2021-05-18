const questions = document.querySelectorAll(".question-group");

questions.forEach(function (question) {
  const icon = question.querySelector(".question-icon");

  icon.addEventListener("click", function () {
    // question.classList.toggle("show");

    questions.forEach(function (answer) {
      if (answer !== question) {
        answer.classList.remove("show");
      }
    });

    question.classList.toggle("show");
  });
});

const questionTitles = document.querySelectorAll(".question h3");

questionTitles.forEach(function (questionTitle) {
  questionTitle.addEventListener("click", function () {
    questionTitle.parentElement.lastElementChild.click();
  });
});
