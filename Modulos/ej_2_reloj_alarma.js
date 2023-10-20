
const d = document

export function reloj(reloj, btnInicio, btnFin){

    const btnIniciar = d.querySelector(btnInicio)
    const $reloj = d.querySelector(reloj)
    let temporizador

    d.addEventListener('click',(e)=>{
        // if(e.target.matches(btnInicio)){
        //     setInterval(()=>{
        //         const tiempo = new Date        
        //         d.querySelector('.clock').textContent = `${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`
        //     },1000)
        // }
        if(e.target.matches(btnInicio)){     
            temporizador = setInterval(()=>{
            $reloj.textContent = new Date().toLocaleTimeString()
            },1000)
            btnIniciar.setAttribute("disabled", true)
        }

        if(e.target.matches(btnFin)){
            clearInterval(temporizador)
            $reloj.textContent = ''
            btnIniciar.removeAttribute("disabled", true)
        }
   
    })
    
}

export function alarma(audio,btnAlarm,btnStopAlarm){

const $audio = d.createElement('audio')
$audio.setAttribute('src', audio)
const $btnAlarm = d.querySelector(btnAlarm)

    d.addEventListener('click',(e) => {

        if(e.target.matches(btnAlarm)){
            $audio.play()
            $btnAlarm.disabled = true
        }
        
        if(e.target.matches(btnStopAlarm)){
            $audio.pause()
            $audio.currentTime = 0
            $btnAlarm.disabled = false
        }
    })
   
}

