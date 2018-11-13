function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    
    var x = 0;

    while(typeof arguments[x] === 'number') { // a media pode ser 0, e 0 é false.
        total += arguments[x];
        x++
    }

    return total / qtd;
}