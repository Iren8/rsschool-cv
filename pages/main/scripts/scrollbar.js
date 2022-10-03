
// scrollbar testimonials

const scroll = document.querySelector('.testimonials__slider');
const scrollContainer = document.querySelector('.range_btn');

let dragging = false; //if scroll dragging rn
let startX = 0; //start coords
let startY = 0;

scroll.addEventListener('mousedown', function (event) {
	dragging = true;
	scroll.style.backgroundColor = '#4B9200';
	startX = event.pageX - Number.parseInt(scroll.style.left || 0);
	startY = event.pageY - Number.parseInt(scroll.style.top || 0);

});

document.body.addEventListener('mousemove', (event) => {
	if (!dragging) return;
	let newPositionX = event.pageX - startX;
	scroll.style.left = `${newPositionX}px`;

	if (newPositionX <= 2) {
		scroll.style.left = 2 + 'px'
	} else if (newPositionX >= 482) {
		scroll.style.left = 482 + 'px'
	}
	;
})

document.body.addEventListener('mouseup', () => {
	dragging = false;
	scroll.style.backgroundColor = '#F9804B';
});
