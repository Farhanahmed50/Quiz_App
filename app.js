var arr = [];

var count = 0;

var countNumber = 0;

var correctAnswer = '';

var answers = [];

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


function questions(inpArr, questionCount) {
    // console.log(inpArr[questionCount]['question']);

    // console.log(inpArr[questionCount]['incorrect_answers'][0]);
    answers = [inpArr[questionCount]['correct_answer'],inpArr[questionCount]['incorrect_answers'][0],inpArr[questionCount]['incorrect_answers'][1],inpArr[questionCount]['incorrect_answers'][2]]
    correctAnswer = inpArr[questionCount]['correct_answer'];
    shuffle(answers);
    // console.log(answers)
    document.getElementById("question").innerText = inpArr[questionCount]['question'];
    document.getElementById("op1").innerText = answers[0]
    document.getElementById("op2").innerText = answers[1]
    document.getElementById("op3").innerText = answers[2]
    document.getElementById("op4").innerText = answers[3]
}


async function getApiData(url) {
    var response = await fetch(url);
    var data = await response.json();
    console.log(data.results);
    arr = data.results;
    document.getElementById("hide-show").style.display = 'none';
    document.getElementById("container").style.display = 'inline';
    questions(arr,count);
    if (!response) {
        console.log("Error: Please check your internet connection.")
    }

}
function nextQuestion() {
    if (count < 9) {
        count = count + 1;
        questions(arr,count);
    }
    if (count == 9) {
        document.getElementById('container').style.display = 'none';
        document.getElementById('score').style.display = 'inline';
        var totalScore = (countNumber / 10) * 100;
        var totalScore = "Your Result : " + totalScore + " %";
        document.getElementById('score').innerHTML = totalScore;
        // var answerCorrect = parseInt(correctAnswer);
        // console.log(correctAnswer);
        
    }

}

function optOne() {
    if (document.getElementById("op1").innerText === correctAnswer) {
        countNumber = countNumber + 1;
    }
    console.log(document.getElementById("op1").innerText);
    console.log(correctAnswer);
    console.log(countNumber);
}

function optTwo() {
    if (document.getElementById("op2").innerText === correctAnswer) {
        countNumber = countNumber + 1;
    }
    console.log(document.getElementById("op2").innerText);
    console.log(correctAnswer);
    console.log(countNumber);
}

function optThree() {
    if (document.getElementById("op3").innerText === correctAnswer) {
        countNumber = countNumber + 1;
    }
    console.log(document.getElementById("op3").innerText);
    console.log(correctAnswer);
    console.log(countNumber);
}

function optFour() {
    if (document.getElementById("op4").innerText === correctAnswer) {
        countNumber = countNumber + 1;
    }
    console.log(document.getElementById("op4").innerText);
    console.log(correctAnswer);
    console.log(countNumber);
}


function startQuiz() {
    console.log("Alhamdulillah! Success")
    category = document.getElementById("category").value;
    difficulty = document.getElementById("difficulty").value;
    console.log(category, difficulty)
    api_url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    getApiData(api_url);
    // window.location.href = "./quiz.html";
    // var className = document.getElementsByClassName("hide-show")
    // className.style.display = "none";


}














