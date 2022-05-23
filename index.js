let section = document.querySelector(".my-projects")
let titleProject = document.querySelector(".mes_projet")
let containerAllProject = document.querySelector(".container-all-projects")
let projetPro = document.querySelector('.pro')
let projetsPro = document.querySelector('.container-projects-pro')

let whidthEcran;


let checkTheSizeWindow = () =>{
    setInterval(() => {
        whidthEcran = document.documentElement.scrollWidth
        console.log(" ecran oui oui ",whidthEcran)
        if(whidthEcran > 720){
            console.log("dans la condi > 720");
            section.style.height = "720px"
        }
        if(whidthEcran > 100 && whidthEcran < 619) {
            // clearInterval(checkTheSizeWindow)
            console.log("dans la condi 100 a 619");
            section.style.height = "1750px"           
        }
        if(whidthEcran > 619 && whidthEcran < 939) {
            console.log("dans la condi 619 a 939");
            section.style.height = "1020px"           
        }
    }, 1000);
}


const changeColor = () => {
    if(whidthEcran > 720){
        clearInterval(checkTheSizeWindow)
        section.style.height = "720px"
    }
    if(whidthEcran > 100 && whidthEcran < 619) {
        clearInterval(checkTheSizeWindow)
        console.log("dans la condi");
        section.style.height = "1750px"           
    }
    if(whidthEcran > 619 && whidthEcran < 939) {
        clearInterval(checkTheSizeWindow)
        console.log("dans la condi");
        section.style.height = "1020px"           
    }
    titleProject.style.color = "grey"
    projetsPro.style.visibility = "hidden"
    containerAllProject.style.display = "grid"
    projetPro.style.color = "black"

}

titleProject.addEventListener("click",() => {
    console.log("sa click")
    // checkTheSizeWindow()
    // containerAllProject.style.visibility = "visibility"
    changeColor()
} )

projetPro.addEventListener("click", () => {
    console.log("salut")
    // checkTheSizeWindow()
    clearInterval(checkTheSizeWindow)
    projetPro.style.color = "grey"
    titleProject.style.color = "black"
    section.style.height = "700px"
    containerAllProject.style.display = "none"
    projetsPro.style.visibility = "visible"
})