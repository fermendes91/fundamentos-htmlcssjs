function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    
    var x = 0;

    if(typeof arguments[x] === 'object') {
        qtd = arguments[x].length;
        total = arguments[x].reduce(function (n1, n2){
            return n1+ n2;
        })
    }else {
        while(typeof arguments[x] === 'number') { // a media pode ser 0, e 0 é false.
            total += arguments[x];
            x++
        }
    }

    return total / qtd;
}