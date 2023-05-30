function myFunction() { 
    var x = document.getElementById("myTopnav");
    if (x.className === "header_container") {
      x.className += " responsive";
    } else {
      x.className = "header_container";
    }
  }