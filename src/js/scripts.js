let navbarStickyTop = document.querySelector('.sticky-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbarStickyTop.classList.add('stuck');
  } else {
    navbarStickyTop.classList.remove('stuck');
  }
});

let modelSidebarPopup = document.getElementById('modelSidebarPopup');
let openSideBar = document.getElementById('openSideBar');
let closeIcon = document.getElementById('closeIcon');

openSideBar.addEventListener('click', function () {
  modelSidebarPopup.classList.add('active');
})

closeIcon.addEventListener('click', function () {
  modelSidebarPopup.classList.remove('active');
})





document.addEventListener('DOMContentLoaded', function () {

  var inputAge = document.getElementById('inputAge');
  var showAdult = document.getElementById('showAdult');
  var showChildren = document.getElementById('showChildren');
  var cardAbove18 = document.querySelectorAll('.cardAbove18');
  var cardUnder18 = document.querySelectorAll('.cardUnder18');
  var overlayContional = document.getElementsByClassName('overlayContional')[0];

  overlayContional.classList.add('active');

  inputAge.addEventListener('input', function () {
    var parsedAgeValue = parseInt(inputAge.value, 10);


    if (parsedAgeValue <= 0) {
      alert('This is not a valid age');
      inputAge.value = '';
    } else {
      for (var i = 0; i < cardUnder18.length; i++) {
        if (parsedAgeValue < 18) {
          cardUnder18[i].style.display = 'block';

        } else {
          cardUnder18[i].style.display = 'none';

        }
      }

      for (var j = 0; j < cardAbove18.length; j++) {
        if (parsedAgeValue >= 18) {
          cardAbove18[j].style.display = 'block';
        } else {
          cardAbove18[j].style.display = 'none';
        }
      }

      overlayContional.classList.remove('active');
    }
  });

  // Additional event listener for handling removal of input
  inputAge.addEventListener('input', function () {
    if (inputAge.value === '') {

      

      for (var k = 0; k < cardUnder18.length; k++) {
        cardUnder18[k].style.display = 'block';
        showChildren.style.display = 'none';
      showAdult.style.display = 'none';
      }

      for (var l = 0; l < cardAbove18.length; l++) {
        cardAbove18[l].style.display = 'block';
        showChildren.style.display = 'none';
      showAdult.style.display = 'none';
      }

      overlayContional.classList.add('active');
    }
  });
});


