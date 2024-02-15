const answers = ["f", "f", "v", "f"];
let i = 0;
score = 0;

function answer(ans) {
    console.log(i)
    if (ans == answers[i]) {
        score++;
    }
    i++;
    document.getElementById("question").innerHTML = `Question ${i+1}`
    if (i >= 4) {
        showScore();
    }
}

function showScore() {
    document.getElementById("vrai").style.display = "none";
    document.getElementById("faux").style.display = "none";
    document.getElementById("buttonDiv").style.display = "none";
    document.getElementById("question").style.display = "none";
    const scoreText = document.getElementById("scoreText");
    scoreText.style.display = "block";
    scoreText.innerHTML = `Score: ${score}/4`
}