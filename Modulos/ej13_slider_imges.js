const d = document

export default function sliderImages(bntPrev, btnNext, slide){
const $btnPrev = d.querySelector(bntPrev),
$btnNext = d.querySelector(btnNext),
$slide = d.querySelectorAll(slide)

$slide[0].classList.remove('slide-inactive')

let i = 0
d.addEventListener('click', (e) => {
  
    if(e.target === $btnPrev){
        $slide[i].classList.add('slide-inactive')
        i--
        if(i < 0)i = $slide.length-1
        $slide[i].classList.remove('slide-inactive')
    }
    if(e.target === $btnNext){
        $slide[i].classList.add('slide-inactive')
        i++
        if(i >= $slide.length)i = 0
        $slide[i].classList.remove('slide-inactive')
    }
})

}