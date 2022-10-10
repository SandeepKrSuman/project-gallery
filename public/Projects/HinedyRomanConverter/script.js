let output = document.getElementById("output")
let input = document.getElementById("input")

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
});

function romanize() {
    let val = parseInt(input.value)
    let roman = []
    let repeat = 0
    const source = {m: 1000, cm: 900, d: 500, cd: 400, c: 100, xc: 90, l: 50, xl: 40,x: 10, ix: 9, v: 5, iv: 4, i: 1}
    for (const item in source){
      repeat = Math.floor(val / source[item])
      roman.push(item.repeat(repeat)) 
      val = val % source[item]
    }
    output.textContent = roman.join("").toUpperCase();
}
