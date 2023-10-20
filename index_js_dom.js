import menuHamb from "./Modulos/ej1 menu hamb.js";
import {reloj, alarma} from "./Modulos/ej_2_reloj_alarma.js";
import { moverEsfera } from "./Modulos/ej3_eventos_teclado.js";
import { cuentaRegresiva } from "./Modulos/ej4_cuenta_regresiva.js";
import scrolltop from "./Modulos/ej5_scroll_top.js";
import lightmode from "./Modulos/ej6_light_mode.js";
import responsiveJs from "./Modulos/ej7_reposnsive.js";
import testerResponsive from "./Modulos/ej8_tester_responsive.js";
import userAgent from "./Modulos/ej9_user_agent.js";
import conection from "./Modulos/ej10_conexion.js";
import newTable from "./Modulos/prueba-tabla-imgs.js";
import searchFilter from "./Modulos/ej11_filtro_busqueda.js";
import sorteo from "./Modulos/ej12_sorteo.js";
import renderSliderContent from "./Modulos/prueba-slider-content.js";
import sliderImages from "./Modulos/ej13_slider_imges.js";
import scrollSpy from "./Modulos/ej14_scroll_spy.js";
import {videoInt, videoHover} from "./Modulos/ej_15_video_inteligente.js";
import formValidate from "./Modulos/ej15_validacion_formulario.js";

const d = document

d.addEventListener('DOMContentLoaded', (e)=>{

    menuHamb('.menu-Button','.menu-Hamb','.menu-Hamb li')
    reloj('.clock','.btn-Clock-1','.btn-Clock-2')
    alarma('./Media/sirena alarma.mp3','.btn-Clock-3','.btn-Clock-4')

    d.addEventListener('keydown', (e) => {
        moverEsfera(e,'.stage','.ball')
    })

    cuentaRegresiva('.countdown','August 8, 2025 12:00:00','Tiempo Cumplido')
    scrolltop('.scroll-Button')
    responsiveJs('youtube','(min-width: 1000px)','<a href="https://www.youtube.com/watch?v=FHa356xQKlA">Ver Video</a>','<iframe width="408" height="240" src="https://www.youtube.com/embed/FHa356xQKlA" frameborder="0" allowfullscreen></iframe>')
    responsiveJs('gmaps','(min-width: 1000px)','<a href="https://maps.app.goo.gl/DreQykkL1Kkwi7VCA">Ver Mapa</a>','<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.1479461913227!2d-74.07735896996549!3d4.598005848603623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x99cb72b35351476!2sPlaza%20de%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1696611821641!5m2!1ses!2sco" width="408" height="240" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
    testerResponsive('tester-responsive')
    userAgent('.user-agent')
    newTable('.search-table')
    searchFilter('.card-filter', '.card')
    sorteo('.form-sort','.sort-list','.winner-sort','.winner','.element')
    renderSliderContent('.container-slide')
    sliderImages('.prev-btn', '.next-btn', '.slide')
    scrollSpy()
    videoInt()
    videoHover()
    formValidate()
})

lightmode('.lightmode-Button', '.scroll-Button')
conection('seccion7')




