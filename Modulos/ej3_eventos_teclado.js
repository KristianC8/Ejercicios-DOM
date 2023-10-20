const d = document
let x = 0, y = 0

export function moverEsfera(e, stage, ball){

    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitsBall = $ball.getBoundingClientRect(),
    $limitsStage = $stage.getBoundingClientRect()
    
    switch (e.keyCode) {
        case 37:
            if($limitsBall.left > $limitsStage.left + 2.5){
                e.preventDefault()
                x--
            }
            break;
        case 38:
            if($limitsBall.top > $limitsStage.top + 2.5){
                e.preventDefault()
                y--
            }
            break;
        case 39:
            if($limitsBall.right < $limitsStage.right - 2.5){
                e.preventDefault()
                x++
            }
            break;
        case 40:
            if($limitsBall.bottom < $limitsStage.bottom - 2.5){
                e.preventDefault()
                y++
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*5}px, ${y*5}px)`
}