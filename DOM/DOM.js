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

// div.innerHTML = document.title;

//////////========================///////////

// div.innerHTML = document.images.length;
// div.innerHTML = document.images[1].src;

//////////========================///////////

// div.innerHTML = document.forms.length;
// div.innerHTML = document.forms[0].x2.value; // x2 = Attribute Name
// div.innerHTML = document.forms[1].x4.type; // x4 = Attribute Name

//////////========================///////////

// div.innerHTML = document.body.innerHTML;
// div.innerHTML = document.body.innerText;

//////////========================///////////

// div.innerHTML = document.links.length; // Links = <a href="">

//////////========================///////////

// p.id = 'id';//removeallidsandaddthisid
// p.className = 'class'; // Remove All Classes And Add This Class

//////////========================///////////

// img.src = 'http://placehold.it/100/100/999'; // Remove Attribute Src And Add This Src
// img.alt = 'img'; // Remove Attribute Alt And Add This Alt
// img.title = 'img'; // Remove Attribute Title And Add This Title

//////////========================///////////

// HasAttribute
// if (img.hasAttribute('title')) {
// 	console.log('yes')
// } else {
// 	console.log('no');
// 	img.setAttribute('title', 'js');
// }
// img.removeAttribute('src');

//////////========================///////////

// Class List
// console.log(p.classList)
// console.log(p.classList.length)
// console.log(p.classList[1])
// console.log(p.classList.item(2))

//////////========================///////////

// Functions The ClassList
// button.onclick = function () {p.classList.add('name','js');}
// button.onclick = function () {p.classList.remove('name','js');}
// button.onclick = function () { p.classList.toggle('name'); }

//////////========================///////////
// Contains 
// if (p.classList.contains('cool')) {
// 	console.log('yes')
// }

//////////========================///////////

// Task On Contains
// button.onclick = function () {
// 	if (p.classList.contains(button.textContent)) {
// 		console.log('yes')
// 	} else {
// 		console.log('no')
// 	}
// }

//////////========================///////////

// console.log(main.childElementCount);
// console.log(main.children); // Ignor The Comment
// console.log(main.children[1].classList); // Ignor The Comment
// console.log(main.children[0].textContent); // Ignor The Comment
// console.log(main.childNodes); // No Ignor The Comment
// console.log(main.childNodes.length); // No Ignor The Comment
// console.log(main.firstChild);
// console.log(main.firstElementChild);
// console.log(main.lastChild);
// console.log(main.lastElementChild);

//////////========================///////////

// Insert Before, Remove Child
// let newElement = document.createElement('span'),
// 	newText = document.createTextNode('span from js');
// newElement.appendChild(newText);
// main.insertBefore(newElement, main.childNodes[1]);
// main.removeChild(main.childNodes[2]);

//////////========================///////////

// console.log(main.childNodes[3].tagName); // No Ignor The Comment
// console.log(main.childNodes[2].tagName); // No Ignor The Comment
// console.log(main.childNodes[1].tagName); // No Ignor The Comment
// console.log(main.childNodes[4].nodeName); // No Ignor The Comment
// console.log(main.childNodes[5].nodeName); // No Ignor The Comment
// console.log(main.childNodes[7].nodeName); // No Ignor The Comment

//////////========================///////////

// Clone Node
// let mynew = document.getElementById('new'),
// 	Copy = main.firstElementChild.cloneNode(true); // If False Or Empty No Copy Text
// mynew.appendChild(Copy);

//////////========================///////////

// Parent Element
// button.onclick = function () {
// 	this.parentElement.style.display = 'none';
// }

//////////========================///////////

// Next Sibling, Previous Sibling
// main.childNodes[2].nextSibling.style.color = "red";
// main.childNodes[8].previousSibling.style.color = "red";

//////////========================///////////
// Client Height/Width
// console.log(main.clientHeight + "px"); // Viewable Area, Include Padding, No margin, No scroll,No Border
// console.log(main.clientWidth + "px"); // Viewable Area, Include padding, No margin, No scroll,No Border

// Offset Height/Width
// console.log(main.offsetHeight + "px"); // Viewable Area, Include Padding, Include scroll, No margin, Include Border
// console.log(main.offsetWidth + "px"); // Viewable Area, Include Padding, Include scroll, No margin, Include Border

// Scroll Height/Width
// console.log(main.scrollHeight + "px"); // All Area Include Invisible Area, Include Padding, No margin, No Border
// console.log(main.scrollWidth + "px"); // All Area Include Invisible Area, Include Padding, No margin, No Border

//////////========================///////////
//////////////??????????/
// button.onclick = function () {
// 	// document.body.scrollTop += 100;
// 	document.body.scrollLeft += 100;
// 	console.log(document.body.scrollTop);
// 	// console.log(document.body.scrollLeft);
// 	if (document.body.scrollTop >= 1000) {
// 		this.classList.add('active');
// 	}
// }

// console.log(document.inputEncoding);
// console.log(document.lastModified);
// console.log(document.URL);

//////////========================///////////

// Append Child, Create Element, Create Text Node, Create Comment, Create Attribute
// let newElement = document.createElement('span'),
// 	text = document.createTextNode('span from js'),
// 	comment = document.createComment('comment from js'),
// 	myattr = document.createAttribute('title');
// newElement.classList.add('span');
// myattr.value = 'span';
// newElement.setAttributeNode(myattr);
// newElement.appendChild(comment);
// newElement.appendChild(text);
// document.body.appendChild(newElement);

//////////========================///////////

// Task On Create Element
// let myul = document.createElement('ul');
// myul.setAttribute('id', 'id');
// for (i = 0; i <= 20; i++) {
// 	let myli = document.createElement('li'),
// 		text = document.createTextNode('home');
// 	myli.appendChild(text);
// 	myul.appendChild(myli);
// }
// document.body.appendChild(myul);

//////////========================///////////

// On Scroll, On Resize, On Focus, On Blur, On Context Menu
// window.onscroll = function () { console.log('scrolling') }
// window.onresize = function () { console.log('resized') }
// window.onfocus = function () {
// 	sub.textContent = 'no';

// }
// window.onblur = function () {
// 	sub.textContent = '';
// 	if (input.value.length < 10) {
// 		sub.textContent = 'sorry';
// 	}
// }
// window.oncontextmenu = function (e) {
// 	e.preventDefault();
// }