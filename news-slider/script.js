function ajouter_bt_menu() {
    let div = document.createElement("div");
    div.id = "bt_menu";
    div.style = "text-align: center;";
    document.querySelector(".mainNav").before(div);

    let a = document.createElement("a");
    a.style = "text-decoration:none; color:#fff; line-height: 40px;";
    a.href = "#";
    a.innerHTML = "&#9776";
    div.appendChild(a);
}

function maj_menu() {
    var largeur = document.body.clientWidth;
    if (largeur <= 1024) {
        document.querySelector("#bt_menu").style.display = "block";
        document.querySelector(".menu").style.display = "none";
    } else {
        document.querySelector("#bt_menu").style.display = "none";

    }
}
ajouter_bt_menu();
window.onresize = maj_menu();
maj_menu();

document.querySelector("#bt_menu").addEventListener("click", function () {
    // let toog=document.querySelector(".mainNav");
    // toog.classList.toggle("menu");

    let menu = document.querySelector(".menu");
    if (menu.style.display == "") {
        menu.style.display = "none";
    } else {
        menu.style.display = "";
    }
});