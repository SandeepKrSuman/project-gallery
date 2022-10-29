const wordCount = document.querySelector('#wordCount')
const textEditor = document.querySelector('#textEditor')

textEditor.addEventListener("keyup", e => {
    const sentence = e.target.value
    const arr = sentence.split(" ")

    wordCount.innerHTML = (sentence === "") ? 0 : arr.filter(word => word !== " ").length
})