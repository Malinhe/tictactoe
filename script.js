let fields = [];


let currentShape = 'cross';

function fillShape(id) {                //id steht für den Funktionsparameter 0-8, den wir in der index.html der Funktion geben
    if(currentShape == 'cross') {       //wenn gerade "cross" ist, dann ändern wir es zu "circle"
        currentShape = 'circle';
    }else {
        currentShape = 'cross';          //ansonsten haben wir gerade einen "circle" und ändern diesen zu "cross"
    }
                                        
    fields[id] = currentShape;           //das Array fields an der Stelle id(0-8) ist zB "cross"
console.log(fields);
draw();
}


//Spieler wechseln
function draw() {
    for(let i = 0; i < fields.length; i++) {       
       if(fields[i] == 'circle') {                                          //wenn fields an der Stelle i = "circle" ist
        document.getElementById(`circle-${i}`).classList.remove('d-none');  //dann entferne die classlist d-none von "circle"
       }

       if(fields[i] == 'cross') {                                            //wenn fields an der Stelle i = "cross" ist
        document.getElementById(`cross-${i}`).classList.remove('d-none');   //dann entferne die classlist d-none von "cross"
       }
    }
}