const select = document.querySelectorAll('select');
const btn = document.querySelectorAll('button');
const h3 = document.querySelector('.image-card').querySelector('h3');
const card = document.querySelector('.card')
const container = document.querySelector('.container');
const img = document.querySelector('img');
const clrbtn = document.querySelector('.clr-btn');
const imgCard = document.querySelector('.image-card');
const audio = document.querySelector('audio')
var id,songPromise = null;

const generateRandomColor = opacity =>{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let alpha = Math.random().toFixed(2);
    return `rgba(${red},${green},${blue},${alpha})`
}

function createOptions()
{
    for(let i=0; i<60; i++){
        const minute = document.createElement('option');
        minute.innerText = i < 10 ? `0${i}` : i;
        select[1].appendChild(minute)
    
        const second = minute.cloneNode(true)
        select[2].appendChild(second)
    
        if(i<24)
            select[0].appendChild(minute.cloneNode(true))
    }
}
createOptions();

function readTime()
{
    let hour = select[0].value;
    let minute = select[1].value;
    let second = select[2].value;
    let totalSecond = (+hour * 60 * 60) + (+minute * 60) + +second;
    const obj = {
        h: hour,
        m: minute,
        s: second,
        t: totalSecond
    }
    return obj;
}

btn[0].addEventListener('click',()=>{
    h3.classList.remove('started')
    const obj = readTime();
    clearInterval(id);
    if(isNaN(obj.t)){
        const time = new Date().getTime() / 1000;
        h3.classList.add("invalid");
        h3.textContent = "Invalid";
        container.classList.add('shake-once')
        id = setInterval(()=>{
            let newTime = new Date().getTime() / 1000;
            if(newTime - time >= 5){
                h3.textContent = "Stopwatch";
                h3.classList.remove('invalid');
                container.classList.remove('shake-once')
                clearInterval(id);
            }
        },3000);
    }
    else{
        img.classList.remove('ring');
        h3.classList.remove('ringing');
        if(songPromise){
            songPromise.pause();
        }
        h3.classList.remove('invalid');
        container.classList.remove('shake-once');
        h3.textContent = "Starting....";
        let hour = +obj.h, minute = +obj.m, second = +obj.s, totalSecond = +obj.t;
        id = setInterval(()=>{
            if(totalSecond == 0){
                h3.classList.remove('started')
                h3.textContent = "Ringing...";
                h3.classList.add('ringing');
                songPromise = new Audio(`tone${Math.floor(Math.random() * 4)}.mp3`);
                songPromise.setAttribute('loop','');
                songPromise.play();
                img.classList.add('ring'); 
                clearInterval(id);
            }
            else{
                h3.textContent = `${(hour + "").length == 1 ? '0'.concat(hour) : hour} : ${(minute + "").length == 1 ? '0'.concat(minute) : minute} : ${(second + "").length == 1 ? '0'.concat(second) : second}`;
                h3.classList.add('started')
                totalSecond--;
                second--;
                if(second==0) second=59;
                if(second==59){
                    if(minute==0){
                        if(hour>0){
                            minute=59;
                            hour--;
                        }
                        else if(hour==0){
                            minute=59;
                        }
                    }
                    else if(minute>0){
                        minute--;
                    }
                }
            }
        },1000)
    }
})

btn[1].addEventListener('click',()=>{
    h3.classList.remove('started')
    clearInterval(id);
    h3.classList.remove('invalid');
    container.classList.remove('shake-once');
    h3.textContent = "Stopping....";
    setTimeout(()=>{
        if(songPromise){
            songPromise.pause();
        }
        img.classList.remove('ring');
        h3.classList.remove('ringing');
        h3.textContent = "Stopwatch";
    },1000)
})

clrbtn.addEventListener('click',(e)=>{
    if(e.target.textContent === "Dark Mode"){
        e.target.textContent = "Light Mode";
        card.classList.add('card-dark')
        h3.classList.add('h3-color')
        imgCard.classList.add('image-card-bg')
        select.forEach(slct=>slct.classList.add('slct-bg-dark'))
        btn.forEach(mybtn=>mybtn.classList.add('btn-bg-dark'))
        document.body.classList.add('bg-dark')
    }
    else if(e.target.textContent === "Light Mode"){
        e.target.textContent = "Dark Mode";
        card.classList.remove('card-dark')
        h3.classList.remove('h3-color')
        imgCard.classList.remove('image-card-bg')
        select.forEach(slct=>slct.classList.remove('slct-bg-dark'))
        btn.forEach(mybtn=>mybtn.classList.remove('btn-bg-dark'))
        document.body.classList.remove('bg-dark')
    }
})