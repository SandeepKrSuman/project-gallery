function cellWriter(){
    document.getElementsByClassName("tile1")[0].innerHTML="1";
    document.getElementsByClassName("tile2")[0].innerHTML="2";
    document.getElementsByClassName("tile3")[0].innerHTML="3";
    document.getElementsByClassName("tile4")[0].innerHTML="4";
    document.getElementsByClassName("tile5")[0].innerHTML="5";
    document.getElementsByClassName("tile6")[0].innerHTML="6";
    document.getElementsByClassName("tile7")[0].innerHTML="7";
    document.getElementsByClassName("tile8")[0].innerHTML="8";
    document.getElementsByClassName("tile9")[0].innerHTML="9";
    document.getElementsByClassName("tile10")[0].innerHTML="10";
    document.getElementsByClassName("tile11")[0].innerHTML="11";
    document.getElementsByClassName("tile12")[0].innerHTML="12";
    document.getElementsByClassName("tile13")[0].innerHTML="13";
    document.getElementsByClassName("tile14")[0].innerHTML="14";
    document.getElementsByClassName("tile15")[0].innerHTML="15";
    document.getElementsByClassName("tile16")[0].innerHTML=" ";

}
var score = 0;
function swapClass(cell1,cell2){
    var temp = document.getElementById(cell1).className;
    var temp1 = document.getElementById(cell2).className;
    document.getElementById(cell1).className = temp1;
    document.getElementById(cell2).className = temp;
    cellWriter();
    colorChanger();
    // calculating moves
    moves=+moves+1;
    document.getElementsByClassName("moves")[0].innerHTML = "Moves<br>"+moves;
    scoreCalc();
    score = score - moves;
    return;
}
function clickCell(row,column){
    var cell_class = document.getElementById("cell"+row+column).className;
    if(cell_class != "tile16"){
        if((+row+1)<=4&&(+row+1)>=1){
        if(document.getElementById("cell"+(+row+1)+column).className=="tile16") swapClass("cell"+row+column,"cell"+(+row+1)+column);
        }
        if((+row-1)<=4&&(+row-1)>=1){
        if(document.getElementById("cell"+(+row-1)+column).className=="tile16") swapClass("cell"+row+column,"cell"+(+row-1)+column);
        }
        if((+column+1)<=4&&(+column+1)>=1){
        if(document.getElementById("cell"+row+(+column+1)).className=="tile16") swapClass("cell"+row+column,"cell"+row+(+column+1));
        }
        if((+column-1)<=4&&(+column-1)>=1){
        if(document.getElementById("cell"+row+(+column-1)).className=="tile16") swapClass("cell"+row+column,"cell"+row+(+column-1));
        }
    }
    checker();

    return;
}

function colorChanger(){
if(document.getElementById("cell11").className=="tile1") document.getElementById("cell11").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell11").className=="tile16") document.getElementById("cell11").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell11").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell12").className=="tile2") document.getElementById("cell12").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell12").className=="tile16") document.getElementById("cell12").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell12").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell13").className=="tile3") document.getElementById("cell13").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell13").className=="tile16") document.getElementById("cell13").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell13").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell14").className=="tile4") document.getElementById("cell14").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell14").className=="tile16") document.getElementById("cell14").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell14").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell21").className=="tile5") document.getElementById("cell21").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell21").className=="tile16") document.getElementById("cell21").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell21").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell22").className=="tile6") document.getElementById("cell22").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell22").className=="tile16") document.getElementById("cell22").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell22").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell23").className=="tile7") document.getElementById("cell23").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell23").className=="tile16") document.getElementById("cell23").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell23").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell24").className=="tile8") document.getElementById("cell24").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell24").className=="tile16") document.getElementById("cell24").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell24").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell31").className=="tile9") document.getElementById("cell31").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell31").className=="tile16") document.getElementById("cell31").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell31").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell32").className=="tile10") document.getElementById("cell32").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell32").className=="tile16") document.getElementById("cell32").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell32").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell33").className=="tile11") document.getElementById("cell33").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell33").className=="tile16") document.getElementById("cell33").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell33").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell34").className=="tile12") document.getElementById("cell34").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell34").className=="tile16") document.getElementById("cell34").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell34").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell41").className=="tile13") document.getElementById("cell41").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell41").className=="tile16") document.getElementById("cell41").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell41").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell42").className=="tile14") document.getElementById("cell42").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell42").className=="tile16") document.getElementById("cell42").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell42").style.backgroundImage= "url('bg1.jpg')";

if(document.getElementById("cell43").className=="tile15") document.getElementById("cell43").style.backgroundImage = "url('bg.jfif')";
else if(document.getElementById("cell43").className=="tile16") document.getElementById("cell43").style.backgroundImage= "url('bg2.jfif')";
else document.getElementById("cell43").style.backgroundImage= "url('bg1.jpg')";

}
var n = "";
function shuffle(){
    moves=-16;
    for(row=1;row<=4;++row){
        for(column=1;column<=4;++column){
            var random_row = Math.floor(Math.random()*4+1);
            var random_column = Math.floor(Math.random()*4+1);
            swapClass("cell"+row+column,"cell"+random_row+random_column);
        }
    }
    n = prompt("Enter Your Name");
    myfunction();
    score = 0;
    return;
}

function checker(){
    if(document.getElementById("cell11").className=="tile1"){
        if(document.getElementById("cell12").className=="tile2"){
            if(document.getElementById("cell13").className=="tile3"){
                if(document.getElementById("cell14").className=="tile4"){
                    if(document.getElementById("cell21").className=="tile5"){
                        if(document.getElementById("cell22").className=="tile6"){
                            if(document.getElementById("cell23").className=="tile7"){
                                if(document.getElementById("cell24").className=="tile8"){
                                    if(document.getElementById("cell31").className=="tile9"){
                                        if(document.getElementById("cell32").className=="tile10"){
                                            if(document.getElementById("cell33").className=="tile11"){
                                                if(document.getElementById("cell34").className=="tile12"){
                                                    if(document.getElementById("cell41").className=="tile13"){
                                                        if(document.getElementById("cell42").className=="tile14"){
                                                            if(document.getElementById("cell43").className=="tile15"){
                                                                document.body.style.backgroundImage = "url('fireworks.gif')"  ; 
                                                                document.body.style.backgroundSize = "contain";                                                  
                                                                alert("Yeah!! You Win");
                                                                return 0;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return 1;
}

function timerUpdate(){
    var a = new Date();
    var time = (a.getHours()-d.getHours())*3600 + (a.getMinutes()-d.getMinutes())*60 + (a.getSeconds()-d.getSeconds());
    document.getElementsByClassName("timer")[0].innerHTML = "Time<br>" + time + "s";
    document.getElementsByClassName("score")[0].innerHTML = "Score<br>" + (+score);
    localStorage.setItem(n,score);
    return;
}

function myfunction(){
    d = new Date();
    setInterval(timerUpdate,1000);
    return;
}
function scoreCalc(){
    if(document.getElementById("cell11").className=="tile1") score += 15;
    if(document.getElementById("cell12").className=="tile2") score += 15;
    if(document.getElementById("cell13").className=="tile3") score += 15;
    if(document.getElementById("cell14").className=="tile4") score += 15;
    if(document.getElementById("cell21").className=="tile5") score += 15;
    if(document.getElementById("cell22").className=="tile6") score += 15;
    if(document.getElementById("cell23").className=="tile7") score += 15;
    if(document.getElementById("cell24").className=="tile8") score += 15;
    if(document.getElementById("cell31").className=="tile9") score += 15;
    if(document.getElementById("cell32").className=="tile10") score += 15;
    if(document.getElementById("cell33").className=="tile11") score += 15;
    if(document.getElementById("cell34").className=="tile12") score += 15;
    if(document.getElementById("cell41").className=="tile13") score += 15;
    if(document.getElementById("cell42").className=="tile14") score += 15;
    if(document.getElementById("cell43").className=="tile15") score += 15; 
}

cellWriter();
colorChanger();
shuffle();
var moves=0;

var d = new Date();


var startX,startY,threshold=25,allowedTime=200,elapsedTime,startTime;

function swipeStart(event){
    startX=event.touches[0].clientX;
    startY=event.touches[0].clientY;
    startTime = new Date();
    console.log(startY);
}
function swipeMove(event){
    event.preventDefault();
}
function swipeEnd(event,r,c){
    var X = event.changedTouches[0].pageX;
    var Y = event.changedTouches[0].pageY;
    var newt = new Date();
    elapsedTime = (newt.getHours()-startTime.getHours())*3600 + (newt.getMinutes()-startTime.getMinutes())*60 + (newt.getSeconds()-startTime.getSeconds());
    var distanceX = X - startX;
    var distanceY = Y - startY;

    if((Math.abs(distanceX)>=threshold||Math.abs(distanceY) >=threshold)&&elapsedTime<=allowedTime) clickCell(r,c);
}