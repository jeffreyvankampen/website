const hamburger = document.querySelector('#hamburger');
const navContainer = document.querySelector('.#hamburger div');
const lines = Array.from(document.querySelectorAll('.line'));

hamburger.addEventListener('click', handleEvent);

function handleEvent() {
	hamburger div.classList.toggle('animator');
	hamburger.classList.toggle('active');
}
