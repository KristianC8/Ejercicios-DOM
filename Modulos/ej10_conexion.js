const d = document, n = navigator, w = window

export default function conection(container){
    const $div = d.createElement('Div')
    const $section = d.getElementById(container)
    $div.classList.add('net-conection')
    $section.insertAdjacentElement('beforeend', $div)
    

    let isOnLine = () => {
        if(n.onLine){
            $div.textContent = 'CONECTADO'
            $div.style.color = '#1b5e'
        }else{
            $div.textContent = 'DESCONECTADO'
            $div.style.color = '#b71c1c'
        }
  
    }
    isOnLine()
    w.addEventListener('online', (e) => isOnLine())
    w.addEventListener('offline', (e) => isOnLine())

    

}