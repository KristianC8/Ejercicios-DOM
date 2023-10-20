const d = document

export default function sorteo(form, ul, btnsort, span, li){
    const $formElement = d.querySelector(form),
    $listElement = d.querySelector(ul),
    $showWinElement = d.querySelector(span)
    let classLi = 'element',
    classbtnremove = 'remove-Li'


    d.addEventListener('click', (e) => {
        if(e.target === $formElement.btnAddItem){

            if($formElement.inItemSort.value === ''){
                alert('Por favor ingrese un elemento')
            }else{
                let inputElement = $formElement.inItemSort.value,
                $list = `<li class='${classLi}'>${inputElement}</li>`//<button class='${classbtnremove}'>❌</button>
                $listElement.insertAdjacentHTML("beforeEnd", $list);
            }
                       
        }

        if(e.target.matches(btnsort)){
            const   $element = d.querySelectorAll(li)
            let items = [], aleatorio
            if($element.length === 0){
                alert('No hay elementos para sortear')
            }else{
                $element.forEach((el) => {
                    items.push(el.textContent)
                })
               
                aleatorio = Math.round(Math.random()*(items.length-1))
                $showWinElement.textContent = `${items[aleatorio]}`
            }
                          
        }
        
        // if(e.target.matches(`.${classbtnremove}`)){
            
        //         console.log("repaila lola")
        //  }
      
    })

}