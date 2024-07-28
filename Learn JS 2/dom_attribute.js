var headingElement = document.querySelector('h1')
// set trực tiếp attibute
headingElement.title = "Heading" 
headingElement.id = "ok"
headingElement.innerText = "New Heading"
headingElement.textContent = "New Heading2"
// dùng phương thức để set các attribute không tồn tại trong thẻ
headingElement.setAttribute('data-','heading')
// get
console.log(headingElement.getAttribute('title'))

var boxElement = document.querySelector('div')
console.log([boxElement])

const colorButton = document.querySelector('button');  

// colorButton.addEventListener('click', function() {  
//     colorButton.style.color = '#fff';  
// });
// colorButton.onclick