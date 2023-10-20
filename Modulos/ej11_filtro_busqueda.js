const d = document

export default function searchFilter(search,card){

    const $cards = d.querySelectorAll(card)
    const $search = d.querySelector(search)
    
    d.addEventListener('keyup', (e)=>{
        if(e.target.matches(search)){

            if(e.key === 'Escape')e.target.value = ''

            $cards.forEach(el => {
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? el.classList.remove('filter')
                : el.classList.add('filter')
            })
        }
    })

}