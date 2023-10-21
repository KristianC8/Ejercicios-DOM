const d = document, w = window

export default function readerText(){

    const $speechSelect = d.getElementById('speech-select'),
    $speechTextarea = d.getElementById('speech-text'),
    $speechBtn = d.getElementById('speech-btn'),
    speechMessage = new SpeechSynthesisUtterance()

    let voices = []

    d.addEventListener('DOMContentLoaded' , e => {
        w.speechSynthesis.addEventListener('voiceschanged', e => {
            voices = w.speechSynthesis.getVoices()
            // console.log(voices)
            voices.forEach(voice => {
            let option = `
            <option value = "${voice.name}" data-lang ="${voice.lang}">${voice.name}---${voice.lang}</option>
            `
            $speechSelect.insertAdjacentHTML('beforeend', option)
            // console.log($speechSelect)
            })
        })

    })

    
    // d.addEventListener('DOMContentLoaded', e => {
    //     w.speechSynthesis.addEventListener('voiceschanged', e => {
    //         voices = w.speechSynthesis.getVoices()

    //         voices.forEach(voice => {
    //             const $option = d.createElement('option')
    //             $option.value = voice.name
    //             $option.textContent = `${voice.name}---${voice.lang}`
    //             $speechSelect.appendChild($option)
    //         })
    //     })
    // })

    d.addEventListener('change', e => {
        if (e.target === $speechSelect) {
            // console.log(voices)
            speechMessage.voice = voices.find(voice => voice.name === e.target.value)
            // console.log(speechMessage)
        }
    })

    d.addEventListener('click', e => {
        if(e.target===$speechBtn){
            speechMessage.text = $speechTextarea.value
            w.speechSynthesis.speak(speechMessage)
        }
    })


}