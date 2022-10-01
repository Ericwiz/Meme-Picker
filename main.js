// Import catsData array from data.js
import { catsData } from "/data.js";


const emotionRadio = document.getElementById('emotion-radios');
const getImageButton = document.getElementById('get-image-btn');

const isGif = document.getElementById('gifs-only-option');


emotionRadio.addEventListener('change', highlightCheckedOption);

getImageButton.addEventListener('click', getMatchingCatsArray);

function getMatchingCatsArray() {

    if (document.querySelector('input[type="radio"]:checked')) {
        const checkedRadioInput = document.querySelector('input[type="radio"]:checked').value
        
        
            let MatchingCatsEmotionArray = catsData.filter(catEmotion => {
                if (isGif.checked) {
                    return catEmotion.emotionTags.includes(checkedRadioInput)&& catEmotion.isGif === true
            } else {
                        return catEmotion.emotionTags.includes(checkedRadioInput)
                    }
            })
            
          

       

        return MatchingCatsEmotionArray
    }
}


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








