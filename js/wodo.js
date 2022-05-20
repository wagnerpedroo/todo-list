//importando a função de mudança de tema
import changeTheme from '../js/changeTheme.js';
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