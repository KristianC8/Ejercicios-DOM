const d = document

export default function formValidate(){
    const $form = d.querySelector('.contact-form'),
    $inputs = d.querySelectorAll('.contact-form [required]')

    $inputs.forEach(input => {
        const classView = 'none'

        let $ErrorMsg = `
        <span id = '${input.name}' class = '${classView}'>${input.title}</span>
        `     
        input.insertAdjacentHTML('afterend',$ErrorMsg)   
    });


    d.addEventListener('keyup', e => {
        if(e.target.matches('.contact-form [required]')){
            let $input = e.target,
            pattern = $input.pattern || $input.dataset.pattern

            if(pattern && $input.value !== ''){
                let regex = new RegExp(pattern)
    
                if(!regex.exec($input.value))
                { return d.getElementById($input.name).classList.add('is-active'),
                         $input.classList.add('is-incorrect'), $input.classList.remove('is-correct')
                }
                else{ return d.getElementById($input.name).classList.remove('is-active'),
                $input.classList.add('is-correct'), $input.classList.remove('is-incorrect')
                 }
            }

            if(!pattern){
                if($input.value === ""){
                    d.getElementById($input.name).classList.add('is-active'),
                    $input.classList.add('is-incorrect'), $input.classList.remove('is-correct')
                }else{
                    d.getElementById($input.name).classList.remove('is-active'),
                    $input.classList.add('is-correct'), $input.classList.remove('is-incorrect')
                }
                 
                
            }
        }
    })

    d.addEventListener('submit', e => {
        e.preventDefault()

        const $loader = d.querySelector('.contact-loader'),
        $response = d.querySelector('.contact-response'),
        $inputs = d.querySelectorAll('.contact-form [required]')

        $loader.classList.remove('none')

        setTimeout(() => {
            $loader.classList.add('none')
            $response.classList.remove('none')
            $form.reset()
            $inputs.forEach(input => {
                input.classList.remove('is-correct')
            })
            setTimeout(() => {
                $response.classList.add('none')
            }, 3000);
        }, 3000);
    })
}