let btnVsCom = document.querySelector("#btn-com")
let btnVsPlay = document.querySelector("#btn-play")
let btnReload = document.querySelector("#btn-reload")
let btnClear = document.querySelector("#clear-points")

btnReload.addEventListener('click',()=>{ 
    reloadGame()

})
btnVsCom.addEventListener('click',()=>{
    console.log("Sexo")
})
btnVsPlay.addEventListener('click',()=>{
    vsPlayer()
})
btnClear.addEventListener('click',()=>{
    clearPoints()
})
