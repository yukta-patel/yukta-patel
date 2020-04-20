var players = ["Yukta","Akshar"];
var markers = ["X","O"];
// players[0] = "Player1";
// players[1] = "Player2";
var whoseTurn = 0;

// onClick function
function play(clickedDiv)
{
    if(clickedDiv.innerHTML == "&nbsp;")
    {
        clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
        togglePlayer();
    }
    
}

//used to switch the user
function togglePlayer()
{
    if (whoseTurn == 0)
    {
        whoseTurn = 1;
    }
    else
    {
        whoseTurn = 0;
    }

    document.getElementById("game-display").innerText = players[whoseTurn] + "'s turn"; 
}