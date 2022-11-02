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


}