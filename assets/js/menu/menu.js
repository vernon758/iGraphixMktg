

 const menu = document.querySelector(".menu-block");
 const menuMain = menu.querySelector(".site-menu-main");
 const submenuAll = menu.querySelectorAll(".sub-menu");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 let subMenuArray = [];
 let subMenuTextArray = [];

 function last(array) {
    return array[array.length - 1];
}
 function last2(array) {
    return array[array.length - 2];
}


 menuMain.addEventListener("click", (e) =>{
    
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".nav-item-has-children")){
        const hasChildren = e.target.closest(".nav-item-has-children");
        
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
     const lastItem = last(subMenuArray);
     const lastItemText = last2(subMenuTextArray);
     subMenuArray.pop();
     subMenuTextArray.pop();
    if(subMenuArray.length >= 0){
        document.getElementById(lastItem).style.animation = "slideRight 0.5s ease forwards";
        menu.querySelector(".current-menu-title").innerHTML = lastItemText;
        setTimeout(() =>{
            document.getElementById(lastItem).classList.remove("active");	
        },300); 
    }
    if(subMenuArray.length == 0){
        menu.querySelector(".mobile-menu-head").classList.remove("active");
    }
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    for(let i = 0 ; submenuAll.length < i ; i++){
        submenuAll[i].classList.remove("active");
    }
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenuArray.push(subMenu.id);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    subMenuTextArray.push(menuTitle);
    
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }

  window.onload = function () {
    var bubble = document.getElementById('get-started-bubble');
    
    // Show the bubble on page load
    bubble.classList.add('show-bubble');

    // Hide the bubble after 10 seconds
    setTimeout(function() {
      bubble.style.display = 'none'; // Fully hide after animation
    }, 100000); // 10,000 milliseconds = 10 seconds
  };

  function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
  
    // Toggle body class to prevent background scrolling
    document.body.classList.toggle("menu-open");
  }
  
  




  document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('sticky-menu');
    const menuTrigger = document.querySelector('.mobile-menu-trigger');
    let isShrinked = false;
    let timer;
  
    // Function to shrink the header
    function shrinkHeader() {
      header.classList.add('shrinked');
      header.classList.remove('expanded');
      isShrinked = true;
    }
  
    // Function to expand the header
    function expandHeader() {
      header.classList.remove('shrinked');
      header.classList.add('expanded');
      isShrinked = false;
    }
  
    // Function to reset the header
    function resetHeader() {
      expandHeader();  // Restore the original expanded state
      clearTimeout(timer);
    }
  
    // Auto-shrink after 3 seconds if not scrolled to the top
    function autoShrink() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 0) {
          shrinkHeader();
        }
      }, 10000);
    }
  
    // Scroll event to shrink the header on scroll down or reset when at the top
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0 && !isShrinked) {
        shrinkHeader();
      } else if (window.scrollY === 0 && isShrinked) {
        resetHeader(); // Reset header when back at the top
      }
    });
  
    // Mobile: tap to expand, auto shrink after 3 seconds
    menuTrigger.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent immediate shrinking
      if (window.innerWidth <= 990) {
        if (header.classList.contains('shrinked')) {
          expandHeader();
          autoShrink();
        }
      }
    });
  
    // For desktop devices: hover to expand, auto shrink after 3 seconds
    header.addEventListener('mouseenter', function() {
      if (window.innerWidth > 991 && header.classList.contains('shrinked')) {
        expandHeader();
        autoShrink();
      }
    });
  
    // Ensure menu visibility on resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 990 && header.classList.contains('shrinked')) {
        expandHeader();
      }
    });
  
    // Initial setup
    autoShrink();
  });

