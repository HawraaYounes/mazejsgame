window.onload=function(){
var status=document.getElementById("status");
var game=document.getElementById("game");
var start=document.getElementById("start");
var end=document.getElementById("end");
var boundary1=document.getElementById("boundary1");
var score=0;
var win=false;

function startgame(){
    status.style.color = "black";
    status.innerHTML = "Keep playing! Be sure to avoid the walls";
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid black 1px";
      }
    for (i in boundaries){
        boundaries[i].addEventListener("mouseover", function(){
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.border = " solid red 1px";
              }
              status.innerHTML = "You Lost :(";
              status.style.color = "red";
              win=false;
        });
    end.addEventListener("mouseover",function(){
        status.innerHTML = "You Win :)";
        status.style.color = "green";
        win=true;
        document.querySelector(".example").innerHTML=score;
    });
    }
    
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid red 1px";
      }
}

function execute(){
    start.onmouseover=function(){
        game.addEventListener("mouseenter",startgame);
        if(status=="You Win :)"){
            score=score+5;
        }
        else if(status=="You Lost :("){
            score=score-10;
        }
        document.querySelector(".example").innerHTML=score;
    }
}
 function reset(){
    score=0;
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid black 1px";
      }
    status.innerHTML="Begin by moving your mouse over the S .";
    
    
 }
execute();
start.addEventListener("click",reset);
document.querySelector(".example").innerHTML=score;
//start.addEventListener("click",reset)
}





