function sendMail() {
    event.preventDefault();

    var fromName = document.getElementById("fromName").value;
    var emailSender = document.getElementById("emailSender").value;
    var subjectSender = document.getElementById("subjectSender").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (!fromName.trim() || !emailSender.trim() || !subjectSender.trim() || !message.trim()) {
        // Display error message
        document.getElementById("errorMessage").innerText = "All fields are required.";
        document.getElementById("errorMessage").style.display = "block";
        // Execute the error function with the specified message
        showError("All fields were not filled.");
        function (error);
        return; // Stop further execution
    } else {
        // Hide error message if all fields are filled
        document.getElementById("errorMessage").style.display = "none";
    }

    // If all fields are filled, proceed to send mail
    emailjs.send("service_cuxogkb", "template_jxyrbhs", {
        from_name: fromName,
        email_sender: emailSender,
        subject: subjectSender,
        message: message
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your message has been sent successfully.'
            });
        }, function (error) {
            console.log('FAILED...', error);
            showError("Something went wrong! Please try again later.");
        });

    // Clear input fields after sending mail
    document.getElementById("fromName").value = "";
    document.getElementById("emailSender").value = "";
    document.getElementById("subjectSender").value = "";
    document.getElementById("message").value = "";
}
