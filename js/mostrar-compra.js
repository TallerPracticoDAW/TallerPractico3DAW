function mostrarLocal() {
    var nombrePelicula = localStorage.getItem("select1");
    var horarioPelicula = localStorage.getItem("select2");
    var boletosPelicula = localStorage.getItem("boletos");
    var fechaCompra = new Date(); 
    //  Mostrar datos almacenados
    document.getElementById("nombre").innerHTML = nombrePelicula;
    document.getElementById("horario").innerHTML = horarioPelicula;
    document.getElementById("boletos").innerHTML = boletosPelicula;
    document.getElementById("fecha").innerHTML = fechaCompra;
    window.onload;
}
window.onload = mostrarLocal();