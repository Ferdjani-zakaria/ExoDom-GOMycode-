// 2
console.log(document.querySelector('p').textContent)
console.log(document.querySelector('p'))
// 3
let b = document.querySelector('.container')
let a = b.querySelectorAll('p')
a[0].id = 'first';
a[1].id = 'second';
a[2].id = 'third';
a[3].id = 'fourth';
console.log(document.querySelector('#first'))
// 4
console.log(document.querySelectorAll('p'))
// 5
console.log(document.querySelector('#first').textContent)
console.log(document.querySelector('#second').textContent)
console.log(document.querySelector('#third').textContent)
console.log(document.querySelector('#fourth').textContent)
// 6
document.querySelector('#fourth').innerHTML = '<b>Fourth Paragraph</b>';
// 7


// exo 2

// 1
// document.querySelector('#first').style.color = 'red';
document.querySelector('#second').style.fontSize = '50px';

// 2

for ( let i=0; i<a.length; i++){
    i%2 ? a[i].style.color = 'yellow' : a[i].style.color = 'red'
}

// exo 3

// 1 in exodom
