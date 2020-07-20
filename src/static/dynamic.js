
window.addEventListener("scroll", function(){
    let menuArea = document.getElementById("menu-area");
  
    if(window.pageYOffset > 0 ){
      menuArea.classList.add("custom_nav")
  
    }else{
      menuArea.classList.remove("custom_nav")
    }
  });