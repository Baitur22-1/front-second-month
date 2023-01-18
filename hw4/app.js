const btn1 =document.querySelector('.plus')
const btn2 =document.querySelector('.minus')
const btn3 =document.querySelector('.clear')
let text = document.querySelector('.text')

let count = 0

btn1.addEventListener("click", ()=> {
    count++
    text.innerHTML = count
    text.style.color = "green"
})
btn2.addEventListener("click", ()=> {
    if(count <= 0){
        count = 0
    }else {
        count--
        text.innerHTML = count
        text.style.color = "red"
    }
})
btn3.addEventListener("click", ()=> {
    count = 0
    text.innerText = count
    text.style.color = "black"
})
text.innerHTML = count

//2

const coordinate = document.querySelector('.coordinate')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

coordinate.addEventListener('mousemove', (e) => {
    x.innerText = e.screenX
    y.innerText = e.screenY
})
