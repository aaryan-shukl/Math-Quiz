function startgame() {
    window.location = "index(2).html";
    var player1Name = document.getElementById("player1-name").value;
    var player2Name = document.getElementById("player2-name").value;
    localStorage.setItem("player-1name",player1Name);
    localStorage.setItem("player-2name",player2Name);
}