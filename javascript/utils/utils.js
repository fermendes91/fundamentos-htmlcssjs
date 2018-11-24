function calcularMedia() {
    var total = 0;
    var qtd = arguments.length;
    
    var x = 0;

    if(typeof arguments[x] === 'object') {
        qtd = arguments[x].length;
        total = arguments[x].reduce(function (n1, n2){
            return n1 + n2;
        })
    }else {
        while(typeof arguments[x] === 'number') { // a media pode ser 0, e 0 é false.
            total += arguments[x];
            x++
        }
    }

    return total / qtd;
}

function isApproved() {
    if(typeof arguments[0] === 'object') {
        var notas = Array.from(arguments[0]);

        var temZero = notas.some(function(nota) {
            return nota === 0;
        })

        if(temZero) {
            return 'REPROVADO, o aluno contem pelo menos uma nota zero.';
        } 

        var media = calcularMedia(arguments[0]);
        if (media >= 7 ) {
            return 'APROVADO COM MEDIA: ' + media;
        } else {
            return 'REPROVADO COM MEDIA: ' + media;
        }
    }
    return 'tipo de dados invalidos, informe novamente';
}

function calcularMediaToFixed() {

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

    return (total / qtd).toFixed(2);
}

function sortear(value) {
    if(typeof value === 'number'){
        var random = Math.random() * value;
        return Math.floor(random);
    } else {
        return Math.random();
    }
}

function formatDateBR(date) {
    var dia = date.getDate();
    var mes = date.getMonth();

    if(dia < 10) {
        dia = '0' + dia;
    }

    if(mes < 10) {
        mes = '0' + mes;
    }

    return dia + '/' + mes + '/' + date.getFullYear();
}