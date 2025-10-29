// Correct answers for each task
const correctAnswers = {
    task1: '.src',
    task2: 'document.getElementById("demo").innerHTML',
    task3: 'document.getElementById("demo").innerHTML',
    task4: 'document.getElementById("demo").innerHTML = "Hello";',
    task5: 'document.getElementsByTagName("p")[0].innerHTML = "Hello";',
    task6: 'document.getElementsByClassName("test")[0].innerHTML = "Hello";'
};

// Function to grade the exam
function gradeExam() {
    let score = 0;
    const totalTasks = Object.keys(correctAnswers).length;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Iterate through each task and compare answers
    for (let task in correctAnswers) {
        const studentAnswer = document.getElementById(task).value.trim();
        const correctAnswer = correctAnswers[task].trim();

        if (studentAnswer === correctAnswer) {
            resultsDiv.innerHTML += `<p>${task}: <span style="color: green;">Correct</span></p>`;
            score++;
        } else {
            resultsDiv.innerHTML += `<p>${task}: <span style="color: red;">Incorrect</span> (Expected: ${correctAnswer})</p>`;
        }
    }

    // Display total score
    resultsDiv.innerHTML += `<h3>Total Score: ${score}/${totalTasks}</h3>`;
}