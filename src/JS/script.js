


const inputText = document.querySelectorAll(".input-text");
const btn = document.getElementById("btn")
const msg = document.getElementsByClassName("texto-erro")



function clicar() {

    

    inputText.forEach( (input, indice) => {   
        
        if (input.value === "") {
                                
            input.classList.add("campo-naopreenchido");
            msg[indice].classList.add("error")

        } else {
            input.classList.add("campo-preenchido")
            input.classList.remove("campo-naopreenchido")
            msg[indice].classList.remove("error")
        }
        
    })
}

