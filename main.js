import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios');

emotionRadio.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e) {
    const radioElementsArray = document.getElementsByClassName('radio')

    for (let radioElement of radioElementsArray) {
        radioElement.classList.remove('highlight')
    }
    
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats) {
    const emotionAray = []
    
    for (let cat of cats) {

        for (let emotion of cat.emotionTags) {
            if (!emotionAray.includes(emotion)) {
                emotionAray.push(emotion)
            }
        }
    }

    return emotionAray
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);

    let radioItems = ''
    for (let emotion of emotions) {
        radioItems += `
            <div class="radio">
                <Label for"${emotion}">${emotion}</Label>
                <input
                type="radio"
                value="${emotion}"
                id="${emotion}"
                name="meme"/>
            </div>
            
        `
    }
    emotionRadio.innerHTML = radioItems;
    
}
renderEmotionsRadios(catsData)








