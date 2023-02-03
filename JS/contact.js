/* 

Table of Contents

1. Click to Submit Button, Get Values of Input Fields, Validate
 1.1 Variables
 1.2 Style Error and Submit Message
 1.3 Validate Name
 1.4 Validate Email
 1.5 Validate Phone
 1.6 Validate Message
 1.7 Show Submission Successful Message
 1.8 Dissapear Info After 5 Seconds
 1.9 Send Data with Ajax
 1.10 Success Function
2. Delete HTML5 Form Bubbles

*/


// Click to Submit Button, Get Values of Input Fields, Validate
function sendContact() {
    // Variables
    var errorMessage = document.getElementById("error_message");
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var submitMessage = document.getElementById("submit_message");
    var text;

    // Style Error and Submit Message
    errorMessage.style.padding = "10px";
    submitMessage.style.padding = "10px";

    // Validate Name
    if(name.length < 5) {
        submitMessage.style.display = "none";
        text = "Please enter valid name.";
        errorMessage.innerHTML = text;
        return false;
    }

    // Validate Email
    if(mail.indexOf("@") == -1 || mail.length < 6) {
        submitMessage.style.display = "none";
        text = "Please enter valid email address.";
        errorMessage.innerHTML = text;
        return false;
    }

    // Validate Phone
    if(isNaN(phone) || phone.length != 13) {
        submitMessage.style.display = "none";
        text = "Please enter valid phone number.";
        errorMessage.innerHTML = text;
        return false;
    }

    // Validate Message
    if(message.length <= 140) {
        submitMessage.style.display = "none";
        text = "Please enter more than 140 characters in your message.";
        errorMessage.innerHTML = text;
        return false;
    }
   
    // Show Submission Successful Message
    errorMessage.style.display = "none";
    submitMessage.style.display = "block";
    text = "Form submitted successfully!";
    submitMessage.innerHTML = text;

    // Dissapear Info After 5 Seconds
    setTimeout(function() {
        $('#submit_message').remove();
        $('#form_area').trigger('reset');
    }, 5000);


    // Send Data with Ajax
    (function ($) {
        'use strict';
        var form = $('.cForm'),
        form_data;

    // Success Function
    function done_func(response) {
        form.find('input:not([type="submit"]), textarea').val('');
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);

    return true;

}


// Delete HTML5 Form Bubbles
document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
      document.getElementById("mail").focus();
    };
}
)
(), 
true);