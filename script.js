//const answers = ["f", "f", "v", "f"];

let i = 0;
score = 0;

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

function answer(ans) {
    console.log(i)
    if (ans == questions[i].answer) {
        score++;
    }
    i++;
    
    if (i >= questions.length) {
        showScore();
    }
    document.getElementById("question").innerHTML = questions[i].question;
}

function showScore() {
    document.getElementById("vrai").style.display = "none";
    document.getElementById("faux").style.display = "none";
    document.getElementById("buttonDiv").style.display = "none";
    document.getElementById("question").style.display = "none";
    const scoreText = document.getElementById("scoreText");
    scoreText.style.display = "block";
    scoreText.innerHTML = `Score: ${score}/${questions.length}`
}
