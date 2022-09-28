import { catsData } from "/data.js";

const emotionRadio = document.getElementById('emotion-radios');

function getEmotionsArray(cats) {
    const emotionAray = []
    
    for (let cat of cats) {

        for (let emotion of cat.emotionTags) {
            emotionAray.push(emotion)
        }
    }

    return emotionAray
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats);

    let radioItems = ''
    for (let emotion of emotions) {
        radioItems += `
        <p>${emotion}</p>
        `
    }
    emotionRadio.innerHTML = radioItems;
    
}
renderEmotionsRadios(catsData)
