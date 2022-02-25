function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("fil").classList.remove("lightFilter")
    document.getElementById("fil").classList.add("darkFilter")
    // document.querySelector(".filtre").style.display="block"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("fil").classList.add("lightFilter")
    document.getElementById("fil").classList.remove("darkFilter")
    // document.querySelector(".filtre").style.display="none"
  }