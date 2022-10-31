import { removeControlTimeSelected } from "./index.js"

export function Timer(
    minutesDisplay,
    secondsDisplay,
    timerDisplay,
    sound

) {
    timerDisplay
    let seconds
    let minutes = Number(minutesDisplay.textContent)
    let timerTimeOut


    function addMinutes(minutes) {
        const minutesToIncremented = Number(minutesDisplay.textContent) + minutes
        minutesDisplay.textContent =  minutesToIncremented
    }

    function removeMinutes(minutes) {
        const minutesToRemoved = Number(minutesDisplay.textContent) - minutes
        minutesDisplay.textContent = minutesToRemoved
    }
    
    
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")

    }
    
    function countDown() {
       timerTimeOut = setTimeout(function() {
            seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            updateTimerDisplay(minutes, 0)
            
            if(isFinished) {
                timerReset()
                return
            }
    
            
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }

            
    
            updateTimerDisplay(minutes,String(seconds - 1), minutes)
    
    
            countDown()
        }, 1000)  
    }
    
    function timerReset() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
        sound.buttonSoundStop()
        removeControlTimeSelected()
    }
    
    function howManyMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        
        if(!newMinutes) {
            timerReset()
            return
        }
    
        minutes = newMinutes
        updateTimerDisplay(minutes, 0)
    }

    return {
        updateTimerDisplay,
        countDown,
        timerReset,
        clearTimeout,
        howManyMinutes,
        addMinutes,
        removeMinutes
    }
}