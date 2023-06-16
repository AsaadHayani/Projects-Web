let div = document.getElementById('show'),
	main = document.getElementById('main'),
	sub = document.getElementById('sub'),
	img = document.querySelector('img'),
	p = document.querySelector('p'),
	form = document.querySelector('form'),
	link = document.querySelector('link'),
	button = document.querySelector('button'),
	input = document.querySelector('input'),
	span = document.querySelector('span');

//////////========================///////////

// Confirm, Prompt
// let con = confirm('Text'); // True, False
// let pro = prompt('Text', 'Default Text');

//////////========================///////////

// Set Time Out, Clear Time Out
// let myTime = setTimeout(() => {
// 	console.log('Hello');
// }, 3000); // After 3 Second
// btn.onclick = () => {
// 	clearTimeout(myTime);
// }

//////////========================///////////

// Set Interval, Clear Interval
// let myTime = setInterval(() => {
// 	console.log('Hello');
// }, 3000); // Evry 3 Second
// btn.onclick = () => {
// 	clearInterval(myTime);
// }

//////////========================///////////

// Count Down
// function count() {
// 	if (div.textContent <= 10) {
// 		div.textContent = 'Done...';
// 		clearInterval(myTime);
// 	}
// 	else {
// 		div.textContent = div.textContent - 1;
// 	}
// }
// let myTime = setInterval(count, 1000);

//////////========================///////////

// open[URL, Nameorattribute, Specification, History Replace]
// button.onclick = function () {
// 	window.open("https://www.google.com", "_blank", "width=400,height=400,top=300,left=300,menubar=no,status=yes", "true");
// }

//////////========================///////////

// ScrollBy, Scroll To,scrollX,scrollY
// button.onclick = function () {
// 	window, scrollBy(200, 150);
// 	console.log('window scrolled left' + scrollX);
// 	console.log('window scrolled top' + scrollY);
// }
// button.onclick = function () {
// 	window, scrollTo(500, 550);
// 	console.log('window scrolled left' + scrollX);
// 	console.log('window scrolled top' + scrollY);
// }

//////////========================///////////

// Stop, Close, Focus
// button.onclick = function () {
// window.stop();
// window.close();
// window.focus();
// }

//////////========================///////////

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

//////////========================///////////

// Location And Her Method
// button.onclick = function () {
// console.log(location.href);
// location.href = 'https://www.google.com';
// location.href = 'mailto:asaad@gmail.com';
// location.href = '#asaad';
// location.hash = '#chat';
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.search);
// console.log(location.pathname);
console.log(location.assign('https://www.google.com'));
console.log(location.replace('http://www.elzero.net'));
console.log(location.reload(false)); // By Default --> Reload From Cach
console.log(location.reload(true)); // Reload From Server
// }

//////////========================///////////

// button.onclick = function () {
// history.forward();
// history.back();
// history.go(2); // Go Up 2 Page And Access Number Negative
// }

//////////========================///////////

// console.log('appName '+navigator.appName);
// console.log('appCodeName '+navigator.appCodeName);
// console.log('appVersion '+navigator.appVersion);
// console.log('platform '+navigator.platform);
// console.log('cookieEnabled '+navigator.cookieEnabled);
// console.log('onLine '+navigator.onLine);
// console.log('language '+navigator.language);
// console.log('product '+navigator.product);

//////////========================///////////

// console.log('Screen Width is: ' + screen.width);
// console.log('Screen Height is: ' + screen.height);
// console.log('Screen avail Height is: ' + screen.availHeight);
// console.log('Screen avail Width is: ' + screen.availWidth);
// console.log('Screen color Depth is: ' + screen.colorDepth);
// console.log('Screen pixel Depth is: ' + screen.pixelDepth);

//////////========================///////////

console.log(document.cookie);
console.log(document.cookie = 'favColor=red; expires=Tue Dec 02 2020 13:23:44 GMT+0400; path=/'); // Set Cookie
console.log(document.cookie);
console.log(document.cookie = 'favColor=blue; expires=Tue Dec 07 2020 13:23:44 GMT+0400; path=/'); // Modify
console.log(document.cookie);
console.log(document.cookie = 'favColor=blue; expires=Tue Dec 01 2020 13:23:44 GMT+0400; path=/'); // Delete
console.log(document.cookie);