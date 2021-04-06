player1_name = localStorage.getItem("player1")
player2_name = localStorage.getItem("player2")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name + " :" + " ";
document.getElementById("player2_name").innerHTML = player2_name + " :" + " ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function neverknow(){
    number1 = document.getElementById("Number1").value
    number2 = document.getElementById("Number2").value
    fullsentence = number1 + " X " + number2

    row1 = fullsentence
    row2 = "<br> Answer : <input id = 'Answer' placeholder = 'Answer' class = 'form-control'> <br> "
    row3 = "<button id = 'Check' onclick = 'check()' class = 'btn btn-info'>Check</button>"

    joined = row1 + row2 + row3
    document.getElementById("output").innerHTML = joined

}
