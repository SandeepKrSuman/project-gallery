const carousel = document.querySelector('.carousel__list');
const cells = carousel.querySelectorAll('.carousel__cell');

const cellWidth = carousel.offsetWidth;
const cellHeight = carousel.offsetHeight;
const cellSize = cellHeight;
const cellCount = 100;

const radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
const theta = 360 / cellCount;

var selectedIndex = 0;

function rotateCarousel() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateX(' + -angle + 'deg)';
    
    const cellIndex = selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) : (selectedIndex % cellCount);
    
    const cells = document.querySelectorAll('.carousel__cell');
    cells.forEach((cell, index) => {
        if(cellIndex === index) {
            if(!cell.classList.contains('selected'))
                cell.classList.add('selected');
        }
        else {
            if(cell.classList.contains('selected')) {
                cell.classList.remove('selected');
            }
        }
    });
}

function selectPrev() {
    selectedIndex--;
    rotateCarousel();    
}

function selectNext() {
    selectedIndex++;
    rotateCarousel();    
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', selectPrev);

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', selectNext);

function initCarousel() {    
    for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellAngle = theta * i;
        cell.style.transform = 'rotateX(' + -cellAngle + 'deg) translateZ(' + radius + 'px)';
    }

    rotateCarousel();
}

initCarousel();
