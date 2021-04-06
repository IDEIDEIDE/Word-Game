function saveNames(){
    player1_Name = document.getElementById("player1_name_input").value
    player2_Name = document.getElementById("player2_name_input").value

    localStorage.setItem("player1", player1_Name)
    localStorage.setItem("player2", player2_Name)

    window.location = "game_page.html" 
}