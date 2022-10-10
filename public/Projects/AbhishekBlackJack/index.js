let player={
  name:"Abhi",
  chips:145,
}
let cards=[]
let sum=0
let hasBlacJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")

let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name+": $"+player.chips

function startGame(){
  isAlive=true
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  cards=[firstCard,secondCard]
  sum=firstCard+secondCard
  renderGame()
}

function renderGame(){
  sumEl.textContent="Sum:"+sum
  cardsEl.textContent="Cards: "
  for(let i=0;i<cards.length;i++){
  cardsEl.textContent+=cards[i] + " "
  }
  if(sum<=20){
  message="Do you want to draw a new card?"
}else if(sum===21){
  message="Wohoo! you've got BlackJack"
  hasBlacJack=true
}else{
  message="You're out of the game!"
  isAlive=false
}
messageEl.textContent=message 
}

function newCard(){
  if(isAlive===true && sum!=21){
  console.log("draw new card!")
  let card=getRandomCard()
  cards.push(card)
  sum+=card
  renderGame()
  }
}

function getRandomCard(){
  let num=Math.floor(Math.random()*13)+1
 if(num>10){
   return 10
 }else if(num===1){
   return 11
 }else{
    return num
 }
 
}

