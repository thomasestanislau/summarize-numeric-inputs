var numero = document.getElementById('numero')
var lista = document.getElementById('selecao')
var valores = []
var resposta = document.getElementById('resposta')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resposta.innerHTML = ''
    }else{
        alert('Valor inválido ou repetido')
    }
    numero.value = ''
    numero.focus() //para voltar no cursos do input

}

function finalizar(){
    if(valores.length == 0){
        alert('Favor informar os números antes de executar')
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var i = 0; i < valores.length; i++){
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            } 
        }

        var media = parseInt(soma / total)

        resposta.innerHTML = ''
        resposta.innerHTML += `<p>A lista tem ${total} valores</p>`
        resposta.innerHTML += `<p>O maior número é: ${maior} </p>`
        resposta.innerHTML += `<p>O menor número é: ${menor} </p>`
        resposta.innerHTML += `<p>A soma dos valores é: ${soma} </p>`
        resposta.innerHTML += `<p>A média dos valores é: ${media} </p>`
        
    }

}