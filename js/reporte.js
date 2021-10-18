function mostrarLocal() {
    var nombrePelicula = localStorage.getItem("select1");
    var horarioPelicula = localStorage.getItem("select2");
    var boletosPelicula = localStorage.getItem("boletos");
    //  Mostrar datos almacenados
    document.getElementById("nombre1").innerHTML = nombrePelicula;
    document.getElementById("horario1").innerHTML = horarioPelicula;
    document.getElementById("boletos1").innerHTML = boletosPelicula;
    window.onload;
}
window.onload = mostrarLocal();