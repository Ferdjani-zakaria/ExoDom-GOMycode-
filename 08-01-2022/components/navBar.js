export const navBar = () =>{
    const root = document.querySelector("#root");
    const divbar = document.createElement("div");
    const navbar = document.createElement("nav");
    const a1 = document.createElement("a");
    a1.textContent = "Home";
    const a2 = document.createElement("a");
    a2.textContent = "page 1";
    const a3 = document.createElement("a");
    a3.textContent = "page 2";
    navbar.appendChild(a1);
    navbar.appendChild(a2);
    navbar.appendChild(a3);
    document.body.insertBefore(divbar, root);
    divbar.appendChild(navbar);
    divbar.style.cssText = "display : flex;"
    
}