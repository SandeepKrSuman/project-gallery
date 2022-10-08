var count = 0;

function disableButton(){
    document.getElementById("green").disabled = true;
    document.getElementById("green").style.backgroundColor = "gray";
}
function enableButton(){
    document.getElementById("green").disabled = false;
    document.getElementById("green").style.backgroundColor = "#00FF00";
}

function incCounter(){
    count++;
    document.getElementById("counter").innerHTML = count;
    enableButton();
}

function decCounter(){
    count--;
    if(count < 0){
        count = 0;
        disableButton();
    }
    else{
        document.getElementById("counter").innerHTML = count;
    }
}

window.addEventListener('keydown',(event) => {
    if(event.key == 'ArrowUp') incCounter();
    else if(event.key == 'ArrowDown') decCounter();
});