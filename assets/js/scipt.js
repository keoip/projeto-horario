const horas = document.getElementById('horas') // Declaração de Variaveis
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function time(){ //Função que vai pegar, hora, minuto, segundo
    let atual = new Date()
    let hr = atual.getHours()
    let min = atual.getMinutes()
    let seg = atual.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(seg < 10) seg = '0' + seg
    
    horas.textContent = hr; // jogando a hora atual para dentro
    minutos.textContent = min; // jogando o minuto atual para dentro
    segundos.textContent = seg; // jogando o segundo atual para dentro
}
 const relogio = setInterval(time, 1000) // SETINTERVAL, função que vai se repetir com intervalos de tempo determinados, nessa está se repetindo a cada segundo,no caso 1000 milísegundos