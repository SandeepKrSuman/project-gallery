function moveBigFoot(){
    alert('Congrats, You found Bigfoot!')
    var pic = document.getElementById('bigFoot');

    var x = Math.floor(Math.random() * 1500);
    var y = Math.floor(Math.random() * 1500);

    pic.style.top = x + 'px';picture.style.left = y + 'px';
}

function loadBigFoot() {
    document.getElementById('bigFoot').src = 'assets/bigfoot.png';
}