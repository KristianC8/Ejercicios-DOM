const d = document, n = navigator, ua = n.userAgent

export default function userAgent(text){
    const $text = d.querySelector(text),

    isMobile = {
        android: ()=>ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {return this.android()||this.ios()||this.windows()}
    },

    isDesktop = {
        linux: ()=> ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {return this.linux()||this.mac()||this.windows()}
    },
        
    isBrowser = {
        chrome: ()=>{
            let navs = 0
            if( ua.match(/edg/i)){
                navs ++}
            if( ua.match(/chrome/i)){
                navs ++}
                // console.log(navs)
            if(navs === 2){
                return false
            }else if(navs === 1){
                return ua.match(/chrome/i)
            }
        },
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => {if( ua.match(/edg/i)&&ua.match(/chrome/i)){
            return ua.match(/edg/i)
        }},
        any: function () {
            return (
            this.ie()||
            this.edge()||
            this.chrome()||
            this.safari()||
            this.firefox()||
            this.opera()
        )}
    }

    $text.innerHTML = `
    <ul>
        <li>Usert Agent: <b>${ua}</b></li>
        <li>PLataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
    `

    if(isBrowser.chrome()){
        $text.innerHTML += `<p>Este contenido solo se ve en Chrome</p>`
    }

    if(isBrowser.firefox()){
        $text.innerHTML += `<p>Este contenido solo se ve en Firefox</p>`
    }

    if(isBrowser.edge()){
        $text.innerHTML += `<p>Este contenido solo se ve en Edge</p>`
    }


} 