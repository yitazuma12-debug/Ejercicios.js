let totalcompra =1600000;
let escliente = true;
let descuento = 0;

if (totalcompra > 1000000 ){
    if (escliente == true ){
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else {
    if ( escliente == true ){
        descuento = 0.05;
    } else {
        descuento = 0;
    }
}
let valordescuento = totalcompra * descuento;
let totalfinal = totalcompra - valordescuento;

console.log("descuento aplicado: " + ( descuento * 100) + "%");
console.log("valor del descuento: } $" + valordescuento);
console.log(" total a pagar: $" + totalfinal);