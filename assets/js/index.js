
$(document).ready(function () {
  let isSearchclick = true;
  const Search = document.querySelector(".navbar_Image_Section");
  const SearchLink = document.createElement("a"); // create anchor tag
    
  SearchLink.href = "#"; // set href for the anchor tag
    
  const SearchBtn = document.createElement("img");
    
  SearchBtn.classList.add("search_icon");
  SearchBtn.src = "<?php echo esc_url( get_template_directory_uri() );?>/assets/images/magnifying-glass-solid.jpg";
  SearchLink.appendChild(SearchBtn); // add img tag as child of anchor tag
  Search.appendChild(SearchLink); // add anchor tag to navbar_Image_Section
  
    $(".search_icon").on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      isSearchclick = !isSearchclick;
  
       isSearchclick
      ? (SearchBtn.src = "<?php echo esc_url( get_template_directory_uri() );?>/assets/images/magnifying-glass-solid.jpg")
      : (SearchBtn.src = "<?php echo esc_url( get_template_directory_uri() );?>/assets/images/circle-xmark-solid.jpg");


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
      ? (SearchBtn.src = "<?php echo esc_url( get_template_directory_uri() );?>/assets/images/magnifying-glass-solid.jpg")
      : (SearchBtn.src = "<?php echo esc_url( get_template_directory_uri() );?>/assets/images/circle-xmark-solid.jpg");
      
      isSearchclick
          ? $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","block")
          : $(".wp-image-28,.is-layout-flex.is-responsive.wp-block-navigation").css("display","none")

          isSearchclick
          ? $(".navbar_Search_Button").css("display","none")
          : $(".navbar_Search_Button").css("display","block")   
          
     })

     $(".earthicons ,.earthicons-submenu").on("mouseover", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".earthicons-submenu").css("visibility","visible")
    })



    $(".earthicons").on("mouseleave", function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(".earthicons-submenu").css("visibility","hidden")
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
  






  