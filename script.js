$(document).ready(function () {
    // Form submission event listener
    $('form').submit(function (event) {
        event.preventDefault();
        sendMail();
    });
});

function sendMail() {
    var fromName = document.getElementById("fromName").value;
    var emailSender = document.getElementById("emailSender").value;
    var subjectSender = document.getElementById("subjectSender").value;
    var message = document.getElementById("message").value;
	 if (!fromName.trim() || !emailSender.trim() || !subjectSender.trim() || !message.trim()) {
        // showError("All fields are required.");
        return;
    }

    // Proceed to send mail
    emailjs.send("service_cuxogkb", "template_jxyrbhs", {
        from_name: fromName,
        email_sender: emailSender,
        subject: subjectSender,
        message: message
    })
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        // Display success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.'
        });
    })
    .catch(function (error) {
        console.log('FAILED...', error);
        // Display error message
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Something went wrong! Please try again later.'
        });
    });

    // Clear input fields after sending mail
    $('form')[0].reset();
}

// Function to show success message on resume download 
function showSuccess() {
    const msg = document.getElementById('download-msg');
    msg.style.display = 'inline'; // Show the message
    
    // Optional: Hide it again after 3 seconds
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
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


