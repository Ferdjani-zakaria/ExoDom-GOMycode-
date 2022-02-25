export const counterComponent =()=>{
       const divM = document.querySelector('#root');
       const p = document.createElement("p");
       const a = document.createElement("button");
       let counter=0;
       divM.appendChild(p);
       divM.appendChild(a);
       p.textContent = counter;
       a.textContent = "click me"
       divM.style.display = "flex";
       divM.style.gap = "20px";
       divM.style.justifyContent = "center";
       a.addEventListener("click", (e)=>{ 
           counter++;
           p.textContent = counter;
        if (counter == 10 ){
            let a = document.createElement("button");
            divM.appendChild(a);
            a.textContent = "reset";
            a.type = "reset";
            a.addEventListener("click", (e)=>{ 
                divM.removeChild(a);
                counter = 0;
                p.textContent = counter;
            })
         }
        })
}