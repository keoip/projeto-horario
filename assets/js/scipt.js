const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let atual = new Date()
    let hr = atual.getHours()
    let min = atual.getMinutes()
    let seg = atual.getSeconds()

    if(hr < 10) hr = '0' + hr
    if(min < 10) min = '0' + min
    if(seg < 10) seg = '0' + seg
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})