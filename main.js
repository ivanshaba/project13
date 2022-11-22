// START OF REGISTER MODAL
const Register = document.querySelector('.register-container');
const Close = document.querySelector('.close');
const Alone = document.querySelector('.alone');
// END OF REGISTER MODAL


// START OF BORROW MODAL
const Hover = document.querySelector('.hover');
const BorrowModal = document.querySelector('.borrow-modal');
const CloseUp = document.querySelector('.close_up');

const NEXT1 = document.getElementById('next1');
const NEXT2 = document.getElementById('next2');
const NEXT3 = document.getElementById('next3');
const NEXT4 = document.getElementById('next4');
const NEXT5 = document.getElementById('next5');
const NEXT6 = document.getElementById('next6');

const PREV1 = document.getElementById('prev1');
const PREV2 = document.getElementById('prev2');
const PREV3 = document.getElementById('prev3');
const PREV4 = document.getElementById('prev4');
const PREV5 = document.getElementById('prev5');

const MODAL1 = document.getElementById('modal1');
const MODAL2 = document.getElementById('modal2');
const MODAL3 = document.getElementById('modal3');
const MODAL4 = document.getElementById('modal4');
const MODAL5 = document.getElementById('modal5');
const MODAL6 = document.getElementById('modal6');

const PROGRESS = document.getElementById('progress');
const STEP = document.getElementsByClassName('.step-col');


// END OF BORROW MODAL

Alone.addEventListener('click', function(){
    Register.classList.add('register-active');
});

Close.addEventListener('click', function(){
    Register.classList.remove('register-active');
});




Hover.addEventListener('click', function(){
    BorrowModal.classList.add('borrow-modal-active');
});

CloseUp.addEventListener('click', function(){
    BorrowModal.classList.remove('borrow-modal-active');
});


NEXT1.onclick = function() {
    MODAL1.style.left = '-65%';
    MODAL2.style.left = '-0.2%';
    MODAL2.style.visibility = 'visible';
    PROGRESS.style.transition = '0.7s ease';
    PROGRESS.style.width = '33.6%';
}


NEXT2.onclick = function() {
    MODAL2.style.left = '-120%';
    MODAL3.style.left = '-0.2%';
    MODAL3.style.visibility = 'visible';
    PROGRESS.style.transition = '0.7s ease';
    PROGRESS.style.width = '52.5%';
}


NEXT3.onclick = function() {
    MODAL3.style.left = '-120%';
    MODAL4.style.left = '-0.2%';
    MODAL4.style.visibility = 'visible';
    PROGRESS.style.transition = '0.7s ease';
    PROGRESS.style.width = '69.7%';
}


NEXT4.onclick = function() {
    MODAL4.style.left = '-120%';
    MODAL5.style.left = '-0.2%';
    MODAL5.style.visibility = 'visible';
    PROGRESS.style.transition = '0.7s ease';
    PROGRESS.style.width = '83.3%';
}


NEXT5.onclick = function() {
    MODAL5.style.left = '-120%';
    MODAL6.style.left = '-0.2%'; 
    MODAL6.style.visibility = 'visible'; 
    PROGRESS.style.transition = '0.3s ease';
    PROGRESS.style.width = '100%';
    PROGRESS.style.background = '#2c9d2c';
}



PREV1.onclick = function() {
    MODAL1.style.left = '50%';
    MODAL2.style.left = '120%';
    PROGRESS.style.width = '17%';
}


PREV2.onclick = function() {
    MODAL2.style.left = '-0.2%';
    MODAL3.style.left = '120%';
    MODAL3.style.visibility = 'visible';
    PROGRESS.style.width = '33.6%';
}


PREV3.onclick = function() {
    MODAL3.style.left = '-0.2%';
    MODAL4.style.left = '120%';
    MODAL4.style.visibility = 'visible';
    PROGRESS.style.width = '52%';
}


PREV4.onclick = function() {
    MODAL4.style.left = '-0.2%';
    MODAL5.style.left = '120%';
    MODAL5.style.visibility = 'visible';
    PROGRESS.style.width = '69.5%';
}


PREV5.onclick = function() {
    MODAL5.style.left = '-0.2%'; 
    MODAL6.style.left = '120%';
    MODAL6.style.visibility = 'visible'; 
    PROGRESS.style.width = '83.3%';
    PROGRESS.style.color = 'green';
    PROGRESS.style.background = '#2c9d2c';
    PROGRESS.style.transition = '0.2s ease';
}


