export function Sounds() {

    const buttonPressAudioForest = new Audio("./sounds/Floresta.wav")
    const buttonPressAudioRain = new Audio("./sounds/Chuva.wav")
    const buttonPressAudioCoffeShop = new Audio("./sounds/Cafeteria.wav")
    const buttonPressAudioFire = new Audio("./sounds/Lareira.wav")


    function buttonSoundPlayForest() {
        buttonSoundStop()
        buttonPressAudioForest.play()
        buttonPressAudioForest.loop = true
    
    }
    
    function buttonSoundPlayRain() {
        buttonSoundStop()
        buttonPressAudioRain.play()
        buttonPressAudioRain.loop = true
    }
    
    function buttonSoundPlayCoffeShop() {
        buttonSoundStop()
        buttonPressAudioCoffeShop.play()
        buttonPressAudioCoffeShop.loop = true
    }
    
    function buttonSoundPlayFire() {
        buttonSoundStop()
        buttonPressAudioFire.play()
        buttonPressAudioFire.loop = true
    }
    
    function buttonSoundStop() {
        buttonPressAudioRain.pause()
        buttonPressAudioCoffeShop.pause()
        buttonPressAudioForest.pause()
        buttonPressAudioFire.pause()

    }

    return {
        buttonSoundPlayForest,
        buttonSoundPlayRain,
        buttonSoundPlayCoffeShop,
        buttonSoundPlayFire,
        buttonSoundStop
    }
}
