//USANDO O ".getHours/Minutes/Seconds" porém usa mais linhas de código
var temp = new Date()
var hora = temp.getHours()
var min = temp.getMinutes()
var sec = temp.getSeconds()

console.log(`Agora são exatamente ${hora}:${min}:${sec}`);
if (hora < 5) {
    console.log('Está tarde, descanse um pouco!');
} else if (hora < 12) {
    console.log('Hora de acordar!');
} else if (hora < 18) {
    console.log('Estude um pouco!');
}
else {
    console.log('Boa noite, ainda podemos estudar um pouco mais!');
}

//USANDO toLocalTimeString PARA PREENCHER DE FORMA COMPLETA

var temp = new Date()
var hora = temp.toLocaleTime()

console.log(`Agora são exatamente ${hora}`);
if (hora < 5) {
    console.log('Está tarde, descanse um pouco!');
} else if (hora < 12) {
    console.log('Hora de acordar!');
} else if (hora < 18) {
    console.log('Estude um pouco!');
}
else {
    console.log('Boa noite, ainda podemos estudar um pouco mais!');
}
