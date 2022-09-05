window.onload=function(){
var status=document.getElementById("status");
var game=document.getElementById("game");
var start=document.getElementById("start");
var end=document.getElementById("end");
var boundary1=document.getElementById("boundary1");
var boundaries=document.getElementsByClassName("boundary");
var score=0;
var win;

function startGame(){
    status.style.color = "black";
    status.innerHTML = "Keep playing! Be sure to avoid the walls";
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid black 1px";
      }
    for (i in boundaries){
        for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function(){
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.border = " solid red 1px";
              }
              status.innerHTML = "You Lost :(";
              status.style.color = "red";
              win=false;
        
        });
    }
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
    
   calculateScore(win);
}

function calculateScore(win){
    if(win==true){
        score=score+5;
        console.log(score);
    }
    else{
        score=score-10;
    }
    document.querySelector(".example").innerHTML=score;
}

function execute(){
    start.onmouseover=function(){
        game.addEventListener("mouseenter",startGame);
    }
}

 function reset(){
    score=0;
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid black 1px";
      } 
 }

execute();
start.addEventListener("click",reset)
}





