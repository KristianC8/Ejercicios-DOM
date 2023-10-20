// const botonMenuHamb = document.querySelector('.menu-Button');
// const menuHamb = document.querySelector('.menu-Hamb');
// const seccion = document.querySelectorAll('.menu-Hamb li')



// document.addEventListener("click", (e) => {       
//     if (e.target.matches(".menu-Button")) {
//       openMenu();
//     }

//     if(e.target.matches(".menu-List")){
//         selectSeccion()
//     }
//   });


// // botonMenuHamb.addEventListener("click", openMenu)
// // seccion.forEach(el=>{
// //     el.addEventListener('click', selectSeccion)
// // })

// function openMenu(e){
//     menuHamb.classList.toggle('open-Menu')
//     botonMenuHamb.classList.toggle('change-ImageMenu')
//     // changeImageMenu()
// }

// function selectSeccion(e){
//     menuHamb.classList.remove('open-Menu')
//     botonMenuHamb.classList.toggle('change-ImageMenu')
//     // changeImageMenu()    
// }

// // function changeImageMenu(){
// //     let url = getComputedStyle(botonMenuHamb).getPropertyValue("background-image");
// //     if(url.toString().includes('/Images/Cerrar%20menu.png'))
// //     {botonMenuHamb.style.backgroundImage = "url('./Images/Menu\ hamburguesa.png')"}
// //         else if(url.toString().includes('/Images/Menu%20hamburguesa.png'))
// //         {botonMenuHamb.style.backgroundImage = "url('./Images/Cerrar\ menu.png')"}
// // }

export default function menuHamb(botonMenuHamb, menuHamb, seccion){

  const d = document

  d.addEventListener("click", (e)=>{
    if(e.target.matches(botonMenuHamb)){
      d.querySelector(menuHamb).classList.toggle("open-Menu")
      d.querySelector(botonMenuHamb).classList.toggle("change-ImageMenu")
    }

    if(e.target.matches(seccion)){
      d.querySelector(menuHamb).classList.remove("open-Menu")
      d.querySelector(botonMenuHamb).classList.remove("change-ImageMenu")
    }
  })

}

