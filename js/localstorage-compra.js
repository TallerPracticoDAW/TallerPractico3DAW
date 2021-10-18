function localCompra() {
    //  Almacenar el nombre de la pelicula en el local storage
    var inputpelicula = document.getElementById("select1");
    localStorage.setItem("select1", inputpelicula.value);
    //  Almacenar el horario de la pelicula en el local storage
    var inputhorario = document.getElementById("select2");
    localStorage.setItem("select2", inputhorario.value);
    //  Almacenar la cantidad de boletos de la pelicula en el local storage
    var inputboletos = document.getElementById("boletos");
    localStorage.setItem("boletos", inputboletos.value);
}