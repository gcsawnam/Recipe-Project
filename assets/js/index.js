
    $(document).ready(function () {
      let isSearchclick = false;
    const Search = document.querySelector(".navbar_Image_Section");
    const SearchBtn = document.createElement("img");
    
    SearchBtn.classList.add("search_icon");
    SearchBtn.src = "http://localhost/wordpress/wp-content/themes/recipes/assets/images/magnifying-glass-solid.jpg";
    Search.appendChild(SearchBtn);
  
    $(".search_icon").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
  
       isSearchclick
      ? (SearchBtn.src = "http://localhost/wordpress/wp-content/themes/recipes/assets/images/magnifying-glass-solid.jpg")
      : (SearchBtn.src = "http://localhost/wordpress/wp-content/themes/recipes/assets/images/circle-xmark-solid.jpg");


      isSearchclick
          ? $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","block")
          : $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","none")
  
          isSearchclick
          ? $(".navbar_Search_Button").css("display","none")
          : $(".navbar_Search_Button").css("display","block")

        
            isSearchclick
            ? $("#overlay").css("display","none")
            : $("#overlay").css("display","block")

            isSearchclick = !isSearchclick;
          })

     $("#overlay").on("click", function(e) {
      
      e.preventDefault();
      e.stopPropagation();
      document.getElementById("overlay").style.display = "none";
  
       isSearchclick
      ? (SearchBtn.src = "http://localhost/wordpress/wp-content/themes/recipes/assets/images/magnifying-glass-solid.jpg")
      : (SearchBtn.src = "http://localhost/wordpress/wp-content/themes/recipes/assets/images/circle-xmark-solid.jpg");
      
      isSearchclick
          ? $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","block")
          : $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","none")

          isSearchclick
          ? $(".navbar_Search_Button").css("display","none")
          : $(".navbar_Search_Button").css("display","block")   
          
     })
    
    
    
   
   

   isdownIconClick=true;

  //  var width = $(window).width();
  // if (width <= 600) {

  
  //    $(".wp-block-navigation__submenu-container").css("display","none")
  // }
   
  
   $(".wp-block-navigation-submenu__toggle").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    isdownIconClick
    ? $(" .wp-block-navigation__submenu-container").css("display","block")
    : $(" .wp-block-navigation__submenu-container").css("display","none")

    isdownIconClick=!isdownIconClick
    
    })

   
  })
    
  // function off() {
  //     document.getElementById("overlay").style.display = "none";


    
  //   window.onscroll = function () {};
  // }
  






  