const d = document, w = window


export default function testerResponsive(form){
    
    const $formElem = d.getElementById(form)
   //$btnCerrar = d.querySelector(btn)
    let ventana

    d.addEventListener("submit", (e) => {
      if(e.target === $formElem){
        e.preventDefault()
        const formData = new FormData($formElem)
        let url = formData.get("url"),
        width = formData.get("width"), 
        height = formData.get("height")
  
        ventana = w.open(`https://${url}`,'Tester Responsive', `innerWidth = ${width}, innerHeight = ${height} close.name = "cerrame"`)  
        console.log(ventana)
      }
        
    });
    
      d.addEventListener('click', (e) => {
        if(e.target === $formElem.cerrar){
            ventana.close()
        }
      })

    
 

}