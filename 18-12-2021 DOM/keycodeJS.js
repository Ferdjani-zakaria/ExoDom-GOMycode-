
// document.body.addEventListener("keydown", myFunction(e))

// const myFunction = e =>{
//     document.querySelector('#num').textContent='e.which'
//     document.querySelector('#key').textContent='e.key'
//     document.querySelector('#location').textContent='e.location'
//     document.querySelector('#which').textContent='e.which'
//     document.querySelector('#code').textContent='e.code'
// }


document.body.addEventListener("keydown", function(Event){
    
    document.querySelector('#num').textContent= Event.which
    document.querySelector('#key').textContent= Event.key
    document.querySelector('#location').textContent= Event.location
    document.querySelector('#which').textContent= Event.which
    document.querySelector('#code').textContent= Event.code
})

document.body.addEventListener("keydown", function(){
    
    document.querySelector('#divP').remove()
    document.querySelector('#div1').classList.add('.show');
    document.querySelector('#box-container').classList.add('.show');

    
})