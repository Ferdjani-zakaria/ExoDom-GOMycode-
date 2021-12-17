const h = document.querySelector('h1');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colorOf = '#';
    for (var i = 0; i < 6; i++) {
      colorOf += letters[Math.floor(Math.random() * 16)];
    }
    return colorOf;
  }
  
  
  
  setInterval(function () {
    h.style.color = getRandomColor();
  }, 1000);

//   2
let list =document.querySelectorAll('li');

for(let i=0; i<list.length; i++){
    if(list[i].textContent.includes("Done")){
        list[i].style.backgroundColor = "green";
    }
    else if(list[i].textContent.includes("Ongoing")){
        list[i].style.backgroundColor = "yellow";
    }
    else if(list[i].textContent.includes("Coming")){
        list[i].style.backgroundColor = "red";
    }
}


