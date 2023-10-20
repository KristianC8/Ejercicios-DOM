const d = document

export default function scrollSpy(){
    const $sections = d.querySelectorAll(`.section`)

    const cb = (entries) => {
        // console.log(entries)

        entries.forEach((entry) => {
            // console.log('entry', entry)
            const id = entry.target.getAttribute('id')
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')   
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')  
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //root toma por defecto el document
        //rootMargin representa margin en px 0px,0px,0px,0px
        //rootMargin: '-250px'
        threshold: [.5, .75]
    })
    // console.log('observer', observer)

    $sections.forEach(el =>{
        observer.observe(el)
    })
}