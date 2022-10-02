// Import catsData array from data.js
import { catsData } from "/data.js";


const emotionRadio = document.getElementById('emotion-radios');
const getImageButton = document.getElementById('get-image-btn');
const isGif = document.getElementById('gifs-only-option');
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')


emotionRadio.addEventListener('change', highlightCheckedOption);
document.getElementById('meme-modal-close-btn').addEventListener('click', () => {
    memeModal.style.display = 'none';
})
getImageButton.addEventListener('click', renderCat);





function highlightCheckedOption(e) {
    const radioElementsArray = document.getElementsByClassName('radio')

    for (let radioElement of radioElementsArray) {
        radioElement.classList.remove('highlight')
    }
    
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}




function getMatchingCatsArray() {

    if (document.querySelector('input[type="radio"]:checked')) {
        const checkedRadioInput = document.querySelector('input[type="radio"]:checked').value
        
       
        
            const matchingCatsEmotionArray = catsData.filter(catEmotion => {
                if (isGif.checked) {
                    return catEmotion.emotionTags.includes(checkedRadioInput) && catEmotion.isGif === true
            } else {
                        return catEmotion.emotionTags.includes(checkedRadioInput)
                    }
            })
            
          

       

        return matchingCatsEmotionArray
    }
}



function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()

    if (catsArray.length === 1){
        return catsArray[0]
    } else {
        let randomNumber = Math.floor(Math.random() * catsArray.length)
        console.log(catsArray[randomNumber])
        
        return catsArray[randomNumber]
        
    }
}



function renderCat(){
    const catObject = getSingleCatObject()

    // render the cat image to the page
    memeModalInner.innerHTML = `<img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >`

    // display modal flex
    memeModal.style.display = 'flex';
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








