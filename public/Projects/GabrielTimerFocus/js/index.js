import {Timer} from "./timer.js"
import {Sounds} from "./sounds.js"


const timerDisplay = document.querySelector('.timer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.second')


let sound = Sounds()

let timer = Timer(
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    sound
    )


const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee_shop')
const buttonSoundFire = document.querySelector('.sound-fire')



const buttonControlPlay = document.querySelector('.controls-play')
const buttonControlStop = document.querySelector('.controls-stop')
const buttonControlAddMinutes = document.querySelector('.controls-add_minutes')
const buttonControlRemoveMinutes = document.querySelector('.controls-remove_minutes')


export function removeControlTimeSelected() {
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')
}

removeControlTimeSelected()

buttonSoundForest.addEventListener('click', function(){
    buttonSoundForest.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')


    sound.buttonSoundPlayForest()
})

buttonSoundRain.addEventListener('click', function(){
    buttonSoundRain.classList.add('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')

    sound.buttonSoundPlayRain()
})


buttonSoundCoffeeShop.addEventListener('click', function(){
    buttonSoundCoffeeShop.classList.add('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')
    buttonSoundFire.classList.remove('button-selected')

    sound.buttonSoundPlayCoffeShop()
})

buttonSoundFire.addEventListener('click', function(){
    buttonSoundFire.classList.add('button-selected')
    buttonSoundCoffeeShop.classList.remove('button-selected')
    buttonSoundRain.classList.remove('button-selected')
    buttonSoundForest.classList.remove('button-selected')

    sound.buttonSoundPlayFire()
})



buttonControlPlay.addEventListener('click', function() {
    buttonControlPlay.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    
    timer.countDown()
    timer.howManyMinutes()
    
})

buttonControlStop.addEventListener('click', function() {
    buttonControlStop.classList.add('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')

    timer.timerReset()
})


buttonControlAddMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.add('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.remove('controls-selected')
    timer.addMinutes(5)
})

buttonControlRemoveMinutes.addEventListener('click', function() {
    buttonControlAddMinutes.classList.remove('controls-selected')
    buttonControlStop.classList.remove('controls-selected')
    buttonControlPlay.classList.remove('controls-selected')
    buttonControlRemoveMinutes.classList.add('controls-selected')

    timer.removeMinutes(5)
})

