var d = document.getElementById("dibujito"); 
var lienzo =d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

for(l=0;l<lineas; l++){
    y1 = 10*l;
    xf = 4*(l+1)+150;
    
    dibujarLinea("#AAF", 150, y1, xf, 300);
    dibujarLinea("#AAF", 150, y1, 300-xf, 300);
    
    console.log("linea " +l);
    l++;

}
dibujarLinea("red", 1,1,0,300);
dibujarLinea("red", 1,300,300,300);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}