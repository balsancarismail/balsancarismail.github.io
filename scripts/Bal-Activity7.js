var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
  $("add").onclick = addScore;
  // Focus on name field
  $("name").focus();
};

function displayResults() {
  var average = 0;
  var highScore = 0;
  for (var i = 0; i < scores.length; i++) {
    average = (average * i + scores[i]) / (i + 1);
    highScore = scores[i] > highScore ? scores[i] : highScore;
  }

  var resultsDiv = $("results");
  resultsDiv.innerHTML = `<h2>Results</h2>
                            <p>Average score is ${average.toFixed(2)}</p>
                            <p>High score is ${highScore}</p>`;
}

function displayScores() {
  var scoresHeader = $("scores_header");
  scoresHeader.innerText = "Scores";
  var table = $("scores_table");
  var thead = table.querySelector("thead");
  var tbody = table.querySelector("tbody");

  thead.innerHTML = `<tr><th>Name</th><th>Score</th></tr>`;
  tbody.innerHTML = ""; // Clear previous scores

  for (var i = 0; i < names.length; i++) {
    var row = `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`;
    tbody.innerHTML += row;
  }
}

function addScore() {
  var name = $("name").value;
  var score = parseInt($("score").value);

  if (name && score >= 0 && score <= 100) {
    names.push(name);
    scores.push(score);
    $("name").value = "";
    $("score").value = "";
  } else {
    alert("You must enter a name and a valid score");
  }

  $("name").focus(); // Move cursor back to name field
}
