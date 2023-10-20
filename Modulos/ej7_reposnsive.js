const d = document, w = window

export default function responsiveJs(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq)

    let responsive = (e) => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent   
        } else {
            d.getElementById(id).innerHTML = mobileContent
        }
    }

    breakpoint.addEventListener('change',responsive)
    responsive(breakpoint)

}