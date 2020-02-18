
const startButton = document.querySelector('.start-button'),
      firstScreen = document.querySelector('.first-screen'),
      mainForm = document.querySelector('.main-form'),
      formCalculate = document.querySelector('.form-calculate'),
      endButton = document.querySelector('.end-button'),
      total = document.querySelector('.total'),
      fastrange =  document.querySelector('.fast-range'); 
      


function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

function handlerCallBackForm(event) {
    const target = event.target;

    if (target.classList.contains('want-faster')){
        target.checked ? showElem(fastrange) : hideElem(showElem);
    }
    
}


startButton.addEventListener('click',function() {
  showElem(mainForm);
  hideElem(firstScreen);
})

endButton.addEventListener('click', function() {

  for(const elem of formCalculate.elements) {
      if (elem.tagName === 'FIELDSET'){
          hideElem(elem);
      }
  }

  showElem(total);

});

formCalculate.addEventListener('change', handlerCallBackForm);