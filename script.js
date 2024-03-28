//const answers = ["f", "f", "v", "f"];

let i = 0;
let correct = 0;
let score = 0;
let answerTime;
class Question {
    constructor(q, a) {
        this.question = q;
        this.answer = a;
    }
}


const questions = [
    new Question("Mao Zedong a créé des problèmes de mobilité dans la chine", "v"), 
    new Question("Les personnes qui a proposé un solution des problèmes n’est pas dans la prison", "f"), 
    new Question("Les camps de renseignement sont pour enseigner les ouïghours le Mandarin", "f"), 
    new Question("En chine il y a un loi qui donne la liberté de presse.", "v"), 
    new Question("Il y a 101 reporteurs en prison maintenant", "f"),
    new Question("Le chambre de communs a décidé d’appeler les évenements au Xinjiang comme génocide", "v")];

function startButton() {
    document.getElementById("vrai").style.display = "none";
    document.getElementById("faux").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("start").style.display = "block";
}

function loadQuestion() {
    document.getElementById("question").style.display = "block";
    document.getElementById("question").innerHTML = questions[i].question;
    document.getElementById("start").style.display = "none";
    document.getElementById("vrai").style.display = "none";
    document.getElementById("faux").style.display = "none";
    timer();
    //let timer = 3000;
    /* = Date.now();
    prevTime = Date.now();
    while (timer > 0) {
        prevTime = curTime;
        curTime = Date.now()
        var delta = curTime - prevTime;
        document.getElementById("timer").innerHTML = Math.ceil(timer/1000);
        
        timer -= delta;
        
    }*/
    //document.getElementById("vrai").style.display = "block";
    //document.getElementById("faux").style.display = "block";
}

function answer(ans) {
    console.log(i)
    if (ans == questions[i].answer) {
        correct++;
        score += Math.ceil(Math.max((answerTime+5000-Date.now())/5, 0));
        console.log(Math.max((answerTime+5000-Date.now())/5, 100));
    }
    i++;
    
    if (i >= questions.length) {
        showScore();
    }
    else {
        loadQuestion();
    }
}

function showScore() {
    document.getElementById("vrai").style.display = "none";
    document.getElementById("faux").style.display = "none";
    document.getElementById("buttonDiv").style.display = "none";
    document.getElementById("question").style.display = "none";
    const scoreText = document.getElementById("scoreText");
    scoreText.style.display = "block";
    scoreText.innerHTML = `Score: ${score}`
    const correctText = document.getElementById("correctText");
    correctText.style.display = "block";
    correctText.innerHTML = `${correct}/${questions.length}`
}

function timer(){
    var sec = 4;
    document.getElementById("timer").style.display = "block";
    document.getElementById('timer').innerHTML=5;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (sec < 0) {
            document.getElementById("timer").style.display = "none";
            document.getElementById("vrai").style.display = "block";
    document.getElementById("faux").style.display = "block";
            answerTime = Date.now();
            
            clearInterval(timer);
        }
    }, 1000);
}
