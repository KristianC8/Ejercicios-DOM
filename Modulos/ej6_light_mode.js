const d = document, ls = localStorage
let state = 'dark'

export default function lightmode(btnMode, btnScroll){
    const $btnMode = d.querySelector(btnMode),
    $btnScroll = d.querySelector(btnScroll) 
  

    const lightMode = () => {
                d.documentElement.style.setProperty('--Azul_oscuro', '#2C74B3');
                d.documentElement.style.setProperty('--Azul_medio_oscuro', '#F1EFEF');
                d.documentElement.style.setProperty('--Azul_medio_claro', '#2C74B3');
                d.documentElement.style.setProperty('--Azul_claro', '#0A2647');
                d.documentElement.style.setProperty('--Letra_clara', '#222');
                d.documentElement.style.setProperty('--Letra_oscura', '#F1EFEF');
                d.documentElement.style.setProperty('--Button_color', '#0A2647');
                d.documentElement.style.setProperty('--Disabled-Button', '#2C74B3')
                d.documentElement.style.setProperty('--menu_Dark', 'url("./Images/menulight.png")');
                d.documentElement.style.setProperty('--menu_DarkClose', 'url("./Images/closelight.png")');
                // $btnmode.style.backgroundImage = 'url("./Images/moon2.png")'
                $btnMode.classList.add('change-ImageMode')
                $btnScroll.classList.add('change-ModeScroll')
                state = 'light'
                ls.setItem('theme','light')
    } 

    const darkMode = () => {
                d.documentElement.style.setProperty('--Azul_oscuro', '#0A2647');
                d.documentElement.style.setProperty('--Azul_medio_oscuro', '#144272');
                d.documentElement.style.setProperty('--Azul_medio_claro', '#205295');
                d.documentElement.style.setProperty('--Azul_claro', '#2C74B3');
                d.documentElement.style.setProperty('--Letra_clara', '#F1EFEF');
                d.documentElement.style.setProperty('--Letra_oscura', '#222');
                d.documentElement.style.setProperty('--Button_color', '#F1EFEF');
                d.documentElement.style.setProperty('--Disabled-Button', '#fffa');
                d.documentElement.style.setProperty('--menu_Dark', "url('./Images/Menu\ hamburguesa.png')");
                d.documentElement.style.setProperty('--menu_DarkClose', 'url("./Images/Cerrar\ menu.png")');
                $btnMode.classList.remove('change-ImageMode')
                $btnScroll.classList.remove('change-ModeScroll')
                state = 'dark'
                ls.setItem('theme','dark')
    }



    d.addEventListener('click', (e) => {
        if(e.target.matches(btnMode)){
            if(state === 'dark'){
                lightMode()
            }else if(state === 'light'){
                darkMode()
            }
           
        }
    })


    d.addEventListener('DOMContentLoaded',(e)=>{
        if(ls.getItem('theme') === null) ls.setItem('theme', 'dark')
        if(ls.getItem('theme') === 'dark') darkMode()
        if(ls.getItem('theme') === 'light') lightMode()
    })

}

