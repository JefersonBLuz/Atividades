const input = document.querySelectorAll('input')
const price = document.getElementsByClassName('price')
const total = document.getElementById('total')
total.innerHTML = ' R$ -'
let valores = []
input.forEach(element =>{
    element.setAttribute('min',0)
})
for (let index = 0; index < price.length; index++) {
    let nome = price[index].innerHTML
    nome = nome.replace('R$','')
    valores.push(Number(nome))
}
function sum(){
    let valor = (input[0].value != ''? (parseInt(input[0].value)*valores[0]):0)+
    (input[1].value != '' ? parseInt(input[1].value)*valores[1]:0)+
    (input[2].value != '' ? parseInt(input[2].value)*valores[2]:0)
    total.innerHTML = `R$ ${valor.toFixed(2)}`
    console.log(input[2].value);
    return Number(valor).toFixed(2)
}

onload = () => {
    for(x=0;x< input.length; x++){
        input[x].onchange = sum;
    }
}