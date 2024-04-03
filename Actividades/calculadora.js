

let fullOperation = "";

function number (value) {
    console.log(value);
    fullOperation = fullOperation + (value);
    redernumber();
}

function operation(op) {
    console.log(op);    
}

function redernumber() {
    document.getElementById('screen').innerHTML = fullOperation;
}