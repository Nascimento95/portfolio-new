let section = document.querySelector(".test")
// section.style.background = "blue"
let titleProject = document.querySelector(".mes_projet")
let containerProject = document.querySelector(".container-all-projects")
let projetPro = document.querySelector('.pro')
let projetsPro = document.querySelector('.container-projects-pro')

const changeColor = () => {
    titleProject.style.color = "red"
    projetsPro.style.visibility = "hidden"
    containerProject.style.display = "display"

}

titleProject.addEventListener("click",() => {
    console.log("sa click")
    // containerProject.style.visibility = "visibility"
    changeColor()
} )

projetPro.addEventListener("click", () => {
    console.log("salut")
    containerProject.style.display = "none"
    projetsPro.style.visibility = "visible"
})