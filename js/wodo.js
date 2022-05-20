//dark mode function
function changeTheme() {

    //muda a cor e o fundo do body
    const corFundo = document.body.style.backgroundColor = "#1b1b1b";
    
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
                        //MAIN CODE

// add a item on ul
var textarea = document.getElementById("txtInput");
var lista = document.getElementById("lista")

function addItem() {
    var p = document.createElement("p");
    p.textContent = textarea.value;
    var styleAttribute = document.createAttribute("style");
    styleAttribute.value = "font-size: 18px";
    styleAttribute.value = "color: #BB2020";
    p.setAttributeNode(styleAttribute)
    lista.appendChild(p);
}

//remove item na ul
function deleteItem() {
    var ps = document.getElementsByTagName("p");
    var quantP = ps.length;
    
    if (quantP > 0) {
        ps[quantP - 1].remove();
    } else {
        alert("Não existem mais elementos.");
    }
}