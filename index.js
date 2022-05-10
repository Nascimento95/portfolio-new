let section = document.querySelector(".test")
// section.style.background = "blue"
let titleProject = document.querySelector(".mes_projet")
let containerProject = document.querySelector(".container-all-projects")

const changeColor = () => {
    titleProject.style.color = "red"
    containerProject.style.visibility = "visibility"
}

titleProject.addEventListener("click",() => {
    console.log("sa click")
    changeColor()
} )