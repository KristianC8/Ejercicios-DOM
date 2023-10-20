const d = document, w= window

export function videoInt(){
    const $videos = d.querySelectorAll(`video[data-video-view]`)
    
    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            // console.log(id)
            if(entry.isIntersecting){
                entry.target.play()
            }else{
                entry.target.pause()
            }
            w.addEventListener('visibilitychange', (e) => {
                d.visibilityState === 'visible'? entry.target.play() : entry.target.pause()
            })
        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: .9
    })

    $videos.forEach((el) => {
        observer.observe(el)
    })
}

export function videoHover(){
    const $videos = d.querySelectorAll(`video[data-video]`)

    d.addEventListener(`mouseover`,(e)=>{
        
        $videos.forEach((el)=>{
            if(e.target === el){
                el.play()
            }else{
                el.pause()
            }
        })
    })

}