import Logo from "../components/logo.js";

// permet d'ajouter le logo au decors
let titleLogo = Logo();
document.querySelector(".title").appendChild(titleLogo);

let optional = document.querySelector(".optional");

document.querySelectorAll("input[type='radio']").forEach((select)=>{
    select.addEventListener('click',()=>{
        if(select.id === "rad1" && select.checked){
            optional.style.display= "flex";
        }
        else if(select.id === "rad2" && select.checked){
            optional.style.display ="none";
        }
    })
})
