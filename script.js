


function Mostrar() {

    let SuMagia = document.getElementById('sumagia').value;
    let Muestra = document.getElementById('muestra');
    let PreguntaMentora = document.getElementById('preguntamentora');
    let JuegoScratch = document.getElementById('scratch-container');
    let Cartel = document.getElementById('cartel');
    let Victoria = document.getElementById('felicitaciones');

    if (SuMagia === "AuI78!!!") {
        Muestra = "Código equivocado, mejor prueba con 3u!M";
    } else {
        Muestra = "Código equivocado";
        PreguntaMentora.style.display = "none";
    }
    
    if (SuMagia === "3u!M") {
        Muestra = "";
        PreguntaMentora.style.display = "block";
    }

    if (SuMagia === "Paso1cOmpletAdo!") {
        Muestra = "";
        JuegoScratch.style.display = "block";
    }

    if (SuMagia === "P4so2HECHO") {
        Muestra = "";
        JuegoScratch.style.display = "none";
        Cartel.style.display = "none";
        Victoria.style.display = "flex";
    }

    document.getElementById('muestra').innerHTML = Muestra;
}

function Correcto() {
    let Muestra2 = document.getElementById('muestra2')
    Muestra2.style.display = "block";
}