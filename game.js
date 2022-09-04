var status=document.getElementById("status");
var game=document.getElementById("game");
var start=document.getElementById("start");
var end=document.getElementById("end");
var boundary1=document.getElementById("boundary1");
var boundaries=document.getElementsByClassName("boundary");
var isOver=false;
var count=0;

// function isMouseOver(element){
//     element.addEventListener("mouseover", isOver=true);
// }
function startgame(){
    for (i in boundaries){
        boundaries[i].addEventListener("mouseover", function(){
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.border = " solid red 1px";
              }
              document.getElementById("status").innerHTML = "You Lost :(";
              document.getElementById("status").style.color = "red";
        });
    ///////////////////
    end.addEventListener("mouseover",function(){
        document.getElementById("status").innerHTML = "You Win :)";
        document.getElementById("status").style.color = "green";
    });
    //////////////////
    }
    
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.border = " solid red 1px";
      }
}

window.onload = function(){
   execute();
};

function execute(){
    start.onmouseover=function(){
        game.addEventListener("mouseenter",startgame);
    }
}

