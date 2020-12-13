function Login(){
    player1=document.getElementById("user1").value;
    player2=document.getElementById("user2").value;

    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);

    window.location="game_page.html";
}