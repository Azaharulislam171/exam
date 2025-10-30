// autograde.js

const correctAnswers = {
  task1: '.src',
  task2: 'document.getElementById("demo").innerHTML',
  task3: 'document.getElementById("demo").innerHTML',
  task4: 'document.getElementById("demo").innerHTML = "Hello";',
  task5: 'document.getElementsByTagName("p")[0].innerHTML = "Hello";',
  task6: 'document.getElementsByClassName("test")[0].innerHTML = "Hello";'
};

function gradeExam(answers) {
  let score = 0;
  const details = [];

  for (const [task, correct] of Object.entries(correctAnswers)) {
    const student = (answers[task] || '').trim();
    const correctAns = correct.trim();
    const isCorrect = student === correctAns;

    if (isCorrect) score++;
    details.push({ task, correct: isCorrect });
  }

  return { score, total: Object.keys(correctAnswers).length, details };
}

module.exports = gradeExam;
