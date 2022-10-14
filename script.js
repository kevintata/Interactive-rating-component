const container = document.querySelector('#container')
const thanksContainer = document.querySelector('.container2')
const submitButton = document.querySelector('.submit')
const rateAgain = document.getElementById('rate-again')
const rating = document.getElementById("rating")
const numbers = document.querySelectorAll(".numbers")
const text = document.querySelectorAll(".tcolor")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    container.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    window.location.reload()
})

numbers.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
        rate.style.color = 'white'
        rate.style.background = '#959eac'
    })
})

numbers.forEach((rate) => {
    rate.addEventListener("dblclick", () =>{
        rating.innerHTML = rate.innerHTML
        rate.style.background = '#7c87981a'
        rate.style.color = 'white'
    })
})