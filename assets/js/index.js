$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "56935478053";

    let cliente = document.querySelector("#cliente").value;
    let proyecto = document.querySelector("#proyecto").value;
    let resp = document.querySelector("#respuesta");

    resp.classList.remove("fail");
    resp.classList.remove("send");

    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          
          *Información del contacto *%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *Indica la proyecto de tu interés *%0A
          ${proyecto}%0A
        `;

    if (cliente === "" || proyecto === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu Mensaje,te responderemos a la Brevedad  ${cliente}`;

    window.open(url);
});


// MDB Lightbox Init