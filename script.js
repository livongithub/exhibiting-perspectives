// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to load data from cookies and draw images
function loadData() {
    var savedData = getCookie('canvasData');
    if (savedData) {
        dataArray = JSON.parse(savedData);
        dataArray.forEach(imgSrc => {
            // Ensure that imgSrc is a string
            if (typeof imgSrc === 'string') {
                let img = document.createElement('img');
                img.src = imgSrc;
                img.style.height = '600px';
                img.style.width = '600px';
                img.style.position = 'absolute';
                img.style.opacity = '.3';
                if (imgSrc.includes('assets/reincarnation/')) {
                    img.style.left = '600px';
                }
                myCanvas.append(img);
            }
        });
    }
}

// Call loadData on page load
window.onload = loadData;

let submitButton = document.getElementById('submit')
let afterLifeChoice = document.getElementById('after-life')
let reincarnationChoice = document.getElementById('reincarnation')
let worryInput = document.getElementById('worry-value')

let myCanvas = document.getElementById('my-canvas')

let worryText = document.getElementById('worry-text')


let aboutButton = document.getElementById('about')
let dataImg = document.getElementById('data-img')

let aboutToggle = false 



let dataArray = []

let AFworryOneImg = ['assets/afterlife/value1-1.png', 'assets/afterlife/value1-2.png', 'assets/afterlife/value1-3.png', 'assets/afterlife/value1-4.png', 'assets/afterlife/value1-5.png']
let AFworryTwoImg = ['assets/afterlife/value2-1.png', 'assets/afterlife/value2-2.png', 'assets/afterlife/value2-3.png', 'assets/afterlife/value2-4.png', 'assets/afterlife/value2-5.png']
let AFworryThreeImg = ['assets/afterlife/value3-1.png', 'assets/afterlife/value3-2.png', 'assets/afterlife/value3-3.png', 'assets/afterlife/value3-4.png', 'assets/afterlife/value3-5.png']
let AFworryFourImg = ['assets/afterlife/value4-1.png', 'assets/afterlife/value4-2.png', 'assets/afterlife/value4-3.png', 'assets/afterlife/value4-4.png', 'assets/afterlife/value4-5.png']
let AFworryFiveImg = ['assets/afterlife/value5-1.png', 'assets/afterlife/value5-2.png', 'assets/afterlife/value5-3.png', 'assets/afterlife/value5-4.png', 'assets/afterlife/value5-5.png']
let AFworrySixImg = ['assets/afterlife/value6-1.png', 'assets/afterlife/value6-2.png', 'assets/afterlife/value6-3.png', 'assets/afterlife/value6-4.png', 'assets/afterlife/value6-5.png']
let AFworrySevenImg = ['assets/afterlife/value7-1.png', 'assets/afterlife/value7-2.png', 'assets/afterlife/value7-3.png', 'assets/afterlife/value7-4.png', 'assets/afterlife/value7-5.png']
let AFworryEightImg = ['assets/afterlife/value8-1.png', 'assets/afterlife/value8-2.png', 'assets/afterlife/value8-3.png', 'assets/afterlife/value8-4.png', 'assets/afterlife/value8-5.png']
let AFworryNineImg = ['assets/afterlife/value9-1.png', 'assets/afterlife/value9-2.png', 'assets/afterlife/value9-3.png', 'assets/afterlife/value9-4.png', 'assets/afterlife/value9-5.png']
let AFworryTenImg = ['assets/afterlife/value10-1.png', 'assets/afterlife/value10-2.png', 'assets/afterlife/value10-3.png', 'assets/afterlife/value10-4.png', 'assets/afterlife/value10-5.png']

let afterLifeArray = [AFworryOneImg, AFworryTwoImg, AFworryThreeImg, AFworryFourImg, AFworryFiveImg, AFworrySixImg, AFworrySevenImg, AFworryEightImg, AFworryNineImg, AFworryTenImg]

let RIworryOneImg = ['assets/reincarnation/value1-1.png', 'assets/reincarnation/value1-2.png', 'assets/reincarnation/value1-3.png', 'assets/reincarnation/value1-4.png', 'assets/reincarnation/value1-5.png']
let RIworryTwoImg = ['assets/reincarnation/value2-1.png', 'assets/reincarnation/value2-2.png', 'assets/reincarnation/value2-3.png', 'assets/reincarnation/value2-4.png', 'assets/reincarnation/value2-5.png']
let RIworryThreeImg = ['assets/reincarnation/value3-1.png', 'assets/reincarnation/value3-2.png', 'assets/reincarnation/value3-3.png', 'assets/reincarnation/value3-4.png', 'assets/reincarnation/value3-5.png']
let RIworryFourImg = ['assets/reincarnation/value4-1.png', 'assets/reincarnation/value4-2.png', 'assets/reincarnation/value4-3.png', 'assets/reincarnation/value4-4.png', 'assets/reincarnation/value4-5.png']
let RIworryFiveImg = ['assets/reincarnation/value5-1.png', 'assets/reincarnation/value5-2.png', 'assets/reincarnation/value5-3.png', 'assets/reincarnation/value5-4.png', 'assets/reincarnation/value5-5.png']
let RIworrySixImg = ['assets/reincarnation/value6-1.png', 'assets/reincarnation/value6-2.png', 'assets/reincarnation/value6-3.png', 'assets/reincarnation/value6-4.png', 'assets/reincarnation/value6-5.png']
let RIworrySevenImg = ['assets/reincarnation/value7-1.png', 'assets/reincarnation/value7-2.png', 'assets/reincarnation/value7-3.png', 'assets/reincarnation/value7-4.png', 'assets/reincarnation/value7-5.png']
let RIworryEightImg = ['assets/reincarnation/value8-1.png', 'assets/reincarnation/value8-2.png', 'assets/reincarnation/value8-3.png', 'assets/reincarnation/value8-4.png', 'assets/reincarnation/value8-5.png']
let RIworryNineImg = ['assets/reincarnation/value9-1.png', 'assets/reincarnation/value9-2.png', 'assets/reincarnation/value9-3.png', 'assets/reincarnation/value9-4.png', 'assets/reincarnation/value9-5.png']
let RIworryTenImg = ['assets/reincarnation/value10-1.png', 'assets/reincarnation/value10-2.png', 'assets/reincarnation/value10-3.png', 'assets/reincarnation/value10-4.png', 'assets/reincarnation/value10-5.png']

let reincarnationArray = [RIworryOneImg, RIworryTwoImg, RIworryThreeImg, RIworryFourImg, RIworryFiveImg, RIworrySixImg, RIworrySevenImg, RIworryEightImg, RIworryNineImg, RIworryTenImg]


submitButton.addEventListener('click',() =>{
    let myNewRoot = document.createElement('img')
    let myNewRootSource
    if(afterLifeChoice.checked || reincarnationChoice.checked){
        if(afterLifeChoice.checked){
            console.log(afterLifeArray[worryInput.value-1][Math.floor(Math.random()*5)])
            myNewRootSource = afterLifeArray[worryInput.value-1][Math.floor(Math.random()*5)]
            dataArray.push({myNewRootSource})
            console.log(dataArray)
        } else if (reincarnationChoice.checked){
            myNewRootSource = reincarnationArray[worryInput.value-1][Math.floor(Math.random()*5)]
            myNewRoot.style.left = '600px'
        }
        myNewRoot.style.height = '600px'
        myNewRoot.style.width = '600px'
        myNewRoot.style.position = 'absolute'
        myNewRoot.style.opacity = '.3'
        myNewRoot.src = myNewRootSource
        myCanvas.append(myNewRoot)
        dataArray.push(myNewRootSource)
        console.log(dataArray)
    }
    setCookie('canvasData', JSON.stringify(dataArray), 7); 
})

aboutButton.addEventListener('click',()=>{
    
    aboutToggle=!aboutToggle
    console.log(aboutToggle)
    if(aboutToggle == true){
        dataImg.style.display = 'block'
        // dataImg.style.transition = '800ms'
    }else{
        dataImg.style.display = 'none'
        // dataImg.style.transition = '800ms'
    }
})





worryInput.addEventListener('input', ()=>{
    worryText.innerHTML = worryInput.value
})


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        checkboxes.forEach(box => {
            if (box !== this) {
                box.checked = false;
            }
        });
    });
});

const rangeInput = document.querySelector('input[type="range"]');

function updateSliderTrack() {
    const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
    rangeInput.style.background = `linear-gradient(to right, #CB7108 0%, #CB7108 ${value}%, transparent ${value}%, transparent 100%)`;
}

// Initial call to set up the slider
updateSliderTrack();

// Event listener to update the slider while sliding
rangeInput.addEventListener('input', updateSliderTrack);

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

// deleteCookie('canvasData')