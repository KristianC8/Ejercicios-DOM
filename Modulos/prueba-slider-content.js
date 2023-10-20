const d = document

export default function renderSliderContent(container){

const $container = d.querySelector(container)
let content = [], classDiv = 'slide', classActive = 'slide-inactive'
content.push(
    {
        img: 'https://loremflickr.com/800/400/animals',
        alt: 'animals'
    },
    {
        title: 'Diapositiva 2',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nam fugit quod esse ipsa voluptate molestias dignissimos temporibus, aspernatur aperiam. Quam animi veritatis porro accusamus ad ea officia ratione provident delectus soluta quae doloribus suscipit consequatur nemo, quia placeat alias. Sunt quam optio nostrum aut facere ad molestiae placeat tenetur praesentium enim!'
    },
    {
        img: 'https://loremflickr.com/800/400/natural',
        alt: 'animals'
    },
    {
        title: 'Diapositiva 4',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nam fugit quod esse ipsa voluptate molestias dignissimos temporibus, aspernatur aperiam. Quam animi veritatis porro accusamus ad ea officia ratione provident delectus soluta quae doloribus suscipit consequatur nemo, quia placeat alias. Sunt quam optio nostrum aut facere ad molestiae placeat tenetur praesentium enim!'
    }
)

content.forEach((obj) => {
    if("img" in obj){
        let $img = 
        `<div class='${classDiv} ${classActive}'>
            <img src=${obj.img} alt=${obj.alt}>
        </div>`
        $container.insertAdjacentHTML('beforeend',$img)
    } else{
        let $slide =  
        `<div class='${classDiv} ${classActive}''>
        <h2>${obj.title}</h2>
        <p>${obj.text}</p>
        </div>`
        $container.insertAdjacentHTML('beforeend',$slide)
    }
})

}