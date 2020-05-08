"use strict";

String.prototype.toAlternatingCase = function () {
    console.log(this);
    let naujasTekstas = '';
    
    for(let i=0; i<this.length; i++){
        let naujaRaide = this[i];
        if(naujaRaide === naujaRaide.toLowerCase() ){
            naujasTekstas += naujaRaide.toUpperCase();  
        } else {
            naujasTekstas += naujaRaide.toLowerCase();
        }
    }
    console.log(naujasTekstas);
    return naujasTekstas;
}

console.log(`hello world!`.toAlternatingCase() === "HELLO WORLD!");
console.log(`JUSTINA`.toAlternatingCase() === "justina");

