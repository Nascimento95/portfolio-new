let section = document.querySelector(".my-projects")
let titleProject = document.querySelector(".mes_projet")
let containerAllProject = document.querySelector(".container-all-projects")
let projetPro = document.querySelector('.pro')
let projetsPro = document.querySelector('.container-projects-pro')

const changeColor = () => {
    section.style.height = "1750px"           
    titleProject.style.color = "grey"
    projetsPro.style.visibility = "hidden"
    containerAllProject.style.display = "grid"
    projetPro.style.color = "black"

}

titleProject.addEventListener("click",() => {
    console.log("sa click")
    // containerAllProject.style.visibility = "visibility"
    changeColor()
} )

projetPro.addEventListener("click", () => {
    console.log("salut")
    projetPro.style.color = "grey"
    titleProject.style.color = "black"
    section.style.height = "700px"
    containerAllProject.style.display = "none"
    projetsPro.style.visibility = "visible"
})