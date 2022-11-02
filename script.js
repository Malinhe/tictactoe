let fields = [];


let currentShape = 'cross';

function fillShape(id) {    //id steht für den Funktionsparameter 0-8, den wir in der index.html der Funktion geben
    if (!fields[id]) {      //Erklärung siehe Screenshot

        if (currentShape == 'cross') {       //wenn gerade "cross" ist, DANN 
            currentShape = 'circle';                     //ändern wir es zu "circle" und
            document.getElementById('player-1').classList.remove('player-inactive');    //entfernen die Klasse "player-inactive" und
            document.getElementById('player-2').classList.add('player-inactive');       //fügen sie dem anderen hinzu, somit ist jederzeit der aktuelle Spieler sichtbar
        } else {
            currentShape = 'cross';          //ansonsten haben wir gerade einen "circle" und ändern diesen zu "cross"
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }

    fields[id] = currentShape;           //das Array fields an der Stelle id(0-8) ist zB "cross"
    console.log(fields);
    draw();
    checkForWin();
    }
}


//Spieler wechseln
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {                                          //wenn fields an der Stelle i = "circle" ist
            document.getElementById(`circle-${i}`).classList.remove('d-none');  //dann entferne die classlist d-none von "circle"
        }

        if (fields[i] == 'cross') {                                            //wenn fields an der Stelle i = "cross" ist
            document.getElementById(`cross-${i}`).classList.remove('d-none');   //dann entferne die classlist d-none von "cross"
        }
    }
}


function checkForWin() {
    let winner; //die Variable ist zuerst undefiniert, sie wird durch die If-Abfrage dann definiert 

    //wenn das 1. Feld (Feld 0) dasselbe ist wie das 2. Feld (Feld 1) UND  das 
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {  //2. Feld (Feld 1) dasselbe ist wie das 3. Feld (Feld 2) DANN ist 
        winner = fields[0];                                 //an dieser Stelle ist der Winner das 1. Feld (Feld 0)
    }                           //wenn in field 0-2 nichts drin steht, dann ist winner = undefined ansonsten entweder "cross" oder "circle"

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) { //der letzte Teil der If-Abfrage, prüft ob da wirklich kein undefined drin steht.
        winner = fields[6];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if (winner) {

        console.log('GEWONNEN:', winner)
    }
}