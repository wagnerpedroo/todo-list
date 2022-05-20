//dark mode function
function changeTheme() {

    //muda a cor e o fundo do body
    document.body.style.backgroundColor = "#1b1b1b";
    document.getElementsByTagName("body")[0].style.color = "#a8a8a8";

    //muda a cor dos botões
    (() => {
        document.getElementsByTagName("button")[0].style.color = "#a8a8a8";
        document.getElementsByTagName("button")[1].style.color = "#a8a8a8";
        document.getElementsByTagName("button")[2].style.color = "#a8a8a8";
    })();
    
    //muda a fundo dos botões
    (() => {
        document.getElementsByTagName("button")[0].style.backgroundColor = "#1b1b1b";
        document.getElementsByTagName("button")[1].style.backgroundColor = "#1b1b1b";
        document.getElementsByTagName("button")[2].style.backgroundColor = "#1b1b1b";
    })();

    //muda cor do h1
    (() => {
        document.querySelector("h1").style.color = "#a8a8a8";
    })();

    //muda a cor do textareas
    (() => {
        document.querySelector("textarea").style.color = "#a8a8a8";
    })();

    document.querySelector("button.btnThemes").innerHTML = "whiteMode";
    
    document.querySelector("button.btnThemes").addEventListener("click", ()=> window.location.reload())
}


