
jQuery(document).ready(function () {
  const Search = document.querySelector(".navbar_Image_Section");
  const SearchLink = document.createElement("a"); // create anchor tag
    
  SearchLink.href = "#"; // set href for the anchor tag
  let isSearchclick = false;
    
  const SearchBtn = document.createElement("img");
  SearchBtn.classList.add("search_icon");
    const themePath = mytheme.imagePath;

    SearchBtn.src = `${themePath}/assets/images/magnifying-glass-solid.jpg`
  SearchLink.appendChild(SearchBtn); 
  Search.appendChild(SearchLink); 
  
    $(".search_icon").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      
  
       isSearchclick
      ? SearchBtn.src = `${themePath}/assets/images/magnifying-glass-solid.jpg`
      : SearchBtn.src = `${themePath}/assets/images/circle-xmark-solid.jpg`;

   
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
      ? SearchBtn.src = `${themePath}/assets/images/magnifying-glass-solid.jpg`
      : SearchBtn.src = `${themePath}/assets/images/circle-xmark-solid.jpg`;
      
      isSearchclick
          ? $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","block")
          : $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","none")

          isSearchclick
          ? $(".navbar_Search_Button").css("display","none")
          : $(".navbar_Search_Button").css("display","block")   
      isSearchclick = !isSearchclick;

          
     })

     $(".earthicons ").on("mouseover", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".earthicons-submenu").css("visibility","visible")
    })



    $(".earthicons").on("mouseleave", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".earthicons-submenu").css("visibility","hidden");
    })

   isdownIconClick=true;

   
   $(" .wp-block-navigation__submenu-container").css("display","none")
  
   $(".wp-block-navigation-submenu__toggle").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    isdownIconClick
    ? $(" .wp-block-navigation__submenu-container").css("display","block")
    : $(" .wp-block-navigation__submenu-container").css("display","none")

    isdownIconClick=!isdownIconClick
    
    })

   
  })
    
  
  






  