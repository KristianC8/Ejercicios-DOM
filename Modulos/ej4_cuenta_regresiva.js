const d = document 

export function cuentaRegresiva (count, fecha, MensajeCompletado){

    let countdown, temp, restTemp, anios, dias, horas, minutos, segundos, interval
    const $count = d.querySelector(count)

    let fechaActual = new Date().getTime(), fechaFutura = new Date(fecha).getTime() 
    temp = temp = fechaFutura-fechaActual

    if(Math.sign(temp) === 1 ){
        interval = setInterval(() => {
            fechaActual = new Date().getTime()
            temp = fechaFutura-fechaActual
                anios = Math.floor(temp/(1000*60*60*24*365))
                restTemp = temp%(1000*60*60*24*365)
                dias = Math.floor(restTemp/(1000*60*60*24))
                restTemp = restTemp%(1000*60*60*24)
                horas = Math.floor(restTemp/(1000*60*60))
                restTemp = restTemp%(1000*60*60)
                minutos = Math.floor(restTemp/(1000*60))
                restTemp = restTemp%(1000*60)
                segundos = Math.floor(restTemp/1000)
            countdown = `Faltan: ${anios} Años ${dias} Días ${horas} Horas ${minutos} Minutos ${segundos} Segundos`
            $count.textContent = countdown

            if(temp < 0){
                clearInterval(interval)
                 $count.textContent = `Tiempo completado`
            }
        }, 1000);
    }else{
        $count.textContent = `La fecha ingresada no puede ser inferior a: ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`
    }
            
}
