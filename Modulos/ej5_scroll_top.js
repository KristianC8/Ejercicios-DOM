const d = document


export default function scrolltop(btnScroll){
const $btnScroll = d.querySelector(btnScroll)

window.addEventListener('scroll', (e)=>{
    if( window.scrollY > 350){
        $btnScroll.classList.remove('fadeOut')
    }else{
        $btnScroll.classList.add('fadeOut')
    }
})

d.addEventListener('click', (e) => {
    if(e.target.matches(btnScroll)){
        window.scrollTo(0, 0)
    }
})

}