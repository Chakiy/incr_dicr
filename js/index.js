const num = document.querySelector(".number")
const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")
let count = 0





inc.addEventListener("click", function(e){
    
    e.preventDefault()
    count += 1
    num.textContent = count
})

dec.addEventListener("click", function(e){
    e.preventDefault()

    count -= 1
    num.textContent = count
})