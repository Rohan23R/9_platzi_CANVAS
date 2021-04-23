var d = document.getElementById("dibujito"); 
var lienzo =d.getContext("2d");
console.log(lienzo);
 
/*
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 20, 200, 120, 60);
*/

function inicioLinea(color, xinicial, yinicial){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
}

function nodos(color, xnodo, ynodo){
    lienzo.strokeStyle = color;
    lienzo.lineTo(xnodo, ynodo);
    lienzo.stroke();
}

function finalLinea(xfinal, yfinal){
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

inicioLinea("magenta", 0,0);
nodos("blue", 20,20);
nodos("green", 30,20);
nodos("orange", 40,20);
nodos("red", 40,30);
nodos("cyan", 40,40);
nodos("blue", 40,50);
nodos("yellow", 40,60);
finalLinea(80,80);





