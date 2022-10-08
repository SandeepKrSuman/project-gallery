// Setting initial count to zero 
let count = 0;

// Select value and buttons
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

/* What we are actually gonna do is that ki hm ek 
forEach function define kr rhe hai taaqi hme saare
buttons ka alag alag function na likhna pade phir hm 
us for each me ek event parameter ka use kr rhe hai
aur us event parameter me ek option hota hai jisse hm 
currentTarget ko target kr skte hai aur uska classList
nikal skte hai */

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("reset")){
            count = 0;        
        }
        else if (styles.contains("increase")){
            count++;
        }
        
        if(count > 0){
            value.style.color = "Green";
        }
        else if (count < 0){
            value = "Red";
        }
value.textContent = count;
    });
});

