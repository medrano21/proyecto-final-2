function ingreso() {
    var usu = document.getElementById("usuario").value;//creamos una varible y lo igualamos al id del html
    var con = document.getElementById("contraseña").value;//creamos una variable y lo igualamos al id del html

    // Si la contraseña y usuario son existosos, nos manda a otro HTML. si no aparece una alerta.
    if (usu == "jvl.srl" && con == "1234") {
        window.location="menu"
    } else {
        alert("USUARIO O CONTRASEÑA DENEGADO");
    }
}

