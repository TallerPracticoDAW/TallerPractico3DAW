let peliculas = [
    {
        "nombre": "La pasión de Cristo",
        "clasificacion": "R - +16",
        "duracion": "126 minutos",
        "descripcion": "La Pasión de Cristo recrea las últimas doce horas en la vida de Jesús de Nazaret desde el momento en el que acude al Huerto de los Olivos (Getsemaní) a orar tras la Última Cena, enfrentándose a las tentaciones de Satanás.",
        "butaca": "Radom",
        "horario": [
            " 8:00", " 9:30", " 1:30", " 4:00"
        ]
    },
    {
        "nombre": "El rey león",
        "clasificacion": "Todo público",
        "duracion": "1h 29min",
        "descripcion": "La historia sigue la vida del pequeño Simba, un cachorro de león que vive felizmente en la sabana con el resto de su familia. ",
        "butaca": "Cuvex",
        "horario": [
            " 9:00", " 12:30", " 2:30", " 6:00"
        ]
    },
    {
        "nombre": "Don Bosco La pelicula",
        "clasificacion": "Todo público",
        "duracion": "3h 20min",
        "descripcion": "Don Bosco es un religioso que decide dedicarse a transmitir un mensaje de razón, religión y cariño a todos los niños desamparados, en una época agitada por luchas políticas y tensiones religiosas",
        "butaca": "Albius",
        "horario": [
            " 11:00", " 3:00", " 7:30"
        ]
    }
]
// Mostramos los datos de la pelicula 1: La pasión de cristo
var tituloUno = document.getElementById('titulo').innerHTML = peliculas[0].nombre;
var clasificacionUno = document.getElementById('clasificacion').innerHTML = "Clasificación: " + peliculas[0].clasificacion;
var duracionUno = document.getElementById('duracion').innerHTML = "Duración: " + peliculas[0].duracion;
var butacaUno = document.getElementById('butaca').innerHTML = "Butaca: " + peliculas[0].butaca;
var descripcionUno = document.getElementById('desc').innerHTML = peliculas[0].descripcion;
var horarioUno = document.getElementById('horarios').innerHTML = "Horarios: " + peliculas[0].horario;

// Mostramos los datos de la pelicula 2: El rey León
var tituloUno = document.getElementById('titulo2').innerHTML = peliculas[1].nombre;
var clasificacionUno = document.getElementById('clasificacion2').innerHTML = "Clasificación: " + peliculas[1].clasificacion;
var duracionUno = document.getElementById('duracion2').innerHTML = "Duración: " + peliculas[1].duracion;
var butacaUno = document.getElementById('butaca2').innerHTML = "Butaca: " + peliculas[1].butaca;
var descripcionUno = document.getElementById('desc2').innerHTML = peliculas[1].descripcion;
var horarioUno = document.getElementById('horarios2').innerHTML = "Horarios: " + peliculas[1].horario;

// Mostramos los datos de la pelicula 3: Don Bosco La pelicula
var tituloUno = document.getElementById('titulo3').innerHTML = peliculas[2].nombre;
var clasificacionUno = document.getElementById('clasificacion3').innerHTML = "Clasificación: " + peliculas[2].clasificacion;
var duracionUno = document.getElementById('duracion3').innerHTML = "Duración: " + peliculas[2].duracion;
var butacaUno = document.getElementById('butaca3').innerHTML = "Butaca: " + peliculas[2].butaca;
var descripcionUno = document.getElementById('desc3').innerHTML = peliculas[2].descripcion;
var horarioUno = document.getElementById('horarios3').innerHTML = "Horarios: " + peliculas[2].horario;

//$("#pelicula1").append('<option value="">' + peliculas[0].nombre + '</option>');

