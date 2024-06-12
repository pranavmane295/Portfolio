// Function to display error message
function showError(errorMessage) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage
    });
}
$(document).ready(function () {
  $(window).scroll(function () {
      if (this.scrollY > 20) {
          $(".navbar").addClass("sticky");
      } else {
          $(".navbar").removeClass("sticky");
      }
  });
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

 
  var typed = new Typed(".typing",{
      strings: ["WEB DEVELOPER","MERN Stack Developer","Blogger","Open Source Contributer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      fadeOut: true,
      
  });
  var typed = new Typed(".typing-2",{
      strings: ["WEB DEVELOPER","MERN Stack Developer","Blogger","Open Source Contributer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
  });
});

   
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function(){
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  $(document).ready(function(){
    $(this).scrollTop(0);
});


