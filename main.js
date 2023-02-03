const btnRotate = document.querySelector (".btnRotate")
const btnBack = document.querySelector(".btnBack")
const contenedor2 = document.querySelector(".contenedor2")
const buttons = document.querySelector(".buttons")
const nav = document.querySelector("nav")
btnRotate.addEventListener ("click" ,()=> {
contenedor2.style.transform= `rotate(-20deg)`
contenedor2.style.transition = `1s`
buttons.style.transform= `rotate(-70deg)`
nav.style.display = `block`

})
btnBack.addEventListener("click", ()=> {
contenedor2.style.transform = `rotate(0)`
buttons.style.transform= `rotate(0)`
nav.style.display = `none`

})
