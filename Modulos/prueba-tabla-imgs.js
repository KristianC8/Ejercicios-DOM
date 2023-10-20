const d = document

class Card{
    constructor(name,img){
        this.name = name
        this.img = img
    }
}


export default function newTable(table){
    const $table = d.querySelector(table)
    const card1 = new Card('Any','https://loremflickr.com/200/200/any'),
    card2 = new Card('Nature','https://loremflickr.com/200/200/nature'),
    card3 = new Card('Architecture','https://loremflickr.com/200/200/architecture'),
    card4 = new Card('Animals','https://loremflickr.com/200/200/animals'),
    card5 = new Card('People','https://loremflickr.com/200/200/people'),
    card6 = new Card('Technology','https://loremflickr.com/200/200/Tecnology'),
    card7 = new Card('Cars','https://loremflickr.com/200/200/cars'),
    card8 = new Card('Time','https://loremflickr.com/200/200/clock')

    const cards = [card1, card2, card3, card4, card5, card6, card7, card8] 

    const classCard = 'card',
    classImg = 'card-img',
    classFigcap = 'card-figcaption'

    cards.forEach(el => {
        const $figure = d.createElement('figure')
        // $img = d.createElement('img'),
        // $figcap = d.createElement('figcaption')

        // $img.src = `${el.img}`
        // $img.alt = `${el.name}`
        // $figcap.textContent = `${el.name}`


        // $figure.classList.add('card')
        // $img.classList.add('card-img')
        // $figcap.classList.add('card-figcaption')

        // $figure.append($img, $figcap)
        // $table.appendChild($figure)
        
        
        const tableSearch =  `<figure class=${classCard}>
        <img src=${el.img} alt="${el.name}" class='${classImg}'>
        <figcaption class='${classFigcap}'>${el.name}</figcaption>
        </figure>`
        $table.insertAdjacentHTML('beforeend', tableSearch)
      
    })


} 