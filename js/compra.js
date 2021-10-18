/*function dependencia(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "cristo"){
        var optionArray = [" 8:00", " 9:30", " 1:30", " 4:00"];
    }else if(s1.value == "rey-leon"){
        var optionArray = [" 9:00", " 12:30", " 2:30", " 6:00"];
    }else if(s1.value == "don-bosco"){
        var optionArray = [" 11:00", " 3:00", " 7:30"];
    }
    for (var option in optionArray){
        var pair = optionArray[option].split("|");
        var nuevaOpcion = document.createElement("option");

        nuevaOpcion.value = pair[0];
        nuevaOpcion.innerHTML = pair[1];
        s2.option.add(nuevaOpcion);
    }
}*/
/*
var peliculas={
    cristo:['8:00', '9:30', '1:30', '4:00'],
    reyLeon:['9:00', '12:30', '2:30', '6:00'],
    donBosco:['11:00', '3:00', '7:30'],
}

var main = document.getElementById("select1");
var sub = document.getElementById("select2");

main.addEventListener('change', function(){

    var opcionSelect = peliculas[this.value];
    while(sub.options.length > 0){
        sub.options.remove(0);
        
    }
    Array.from(opcionSelect).forEach(function(el){
        let options = new Option(el, el);
        sub.appendChild(options);
    })
});
*/