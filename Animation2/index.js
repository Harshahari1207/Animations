const dropButton = document.querySelector('.dropDownMenuBtn');
const droDownContainer = document.querySelector('.dropDownMenu');


dropButton.addEventListener('click',showScreen);
window.addEventListener('click',clickOut);


function showScreen(){
    droDownContainer.classList.toggle('visible');
}

function clickOut(x){
    if(x.target !== dropButton){
        droDownContainer.classList.remove('visible');
    }
}