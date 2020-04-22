var players = ["Yukta","Akshar"];
var markers = ["X","O"];
// players[0] = "Player1";
// players[1] = "Player2";
var scores = [0,0];
var whoseTurn = 0;
var winValues = [7,56,73,84,146,273,292,448];
var gameOver = false;


// onClick function
function play(clickedDiv , divPoints)
{
  if(!gameOver)
  {
    if(clickedDiv.innerHTML == "&nbsp;")
    {
        
        clickedDiv.innerHTML = "<span>" + markers[whoseTurn] + "</span>";
        pointCount(divPoints);
        winCheck();
        if(!gameOver)
        {
        togglePlayer();
        }
    }
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


function pointCount(userPoints)
{
    scores[whoseTurn] += userPoints;
}

function winCheck()
{
    for(var i=0; i< winValues.length; i++)
    {
        if ((winValues[i] & scores[whoseTurn]) == winValues[i])
        {
          gameOver = true;
          // alert(players[whoseTurn] + " Wins!!!...");
          document.getElementById("game-display").innerText = players[whoseTurn] + " Wins!!!..."; 
        }
    }
}

