function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://woj8p121s0.execute-api.us-east-1.amazonaws.com/production/contact-me";

    // Validate contact form fields
    var nameVal = /[A-Za-z]{1}[A-Za-z]/;
    if (!nameVal.test($("#name").val())) {
        $("#messages").addClass("alert-danger");
        $("#messages").text("Name can not contain less than 2 characters");
        return;
    }
    if ($("#email").val() == "") {
        $("#messages").addClass("alert-danger");
        $("#messages").text("Please enter your email address");
        return;
    }
    var emailVal = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!emailVal.test($("#email").val())) {
        $("#messages").addClass("alert-danger");
        $("#messages").text("Please enter a valid email address");
        return;
    }
    if ($("#subject").val() == "") {
        $("#messages").addClass("alert-danger");
        $("#messages").text("Please enter a subject");
        return;
    }
    if ($("#message").val() == "") {
        $("#messages").addClass("alert-danger");
        $("#messages").text("Please enter a message");
        return;
    }

    // Create model for contact form data
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Make API call to AWS Lambda function
    $.ajax({
        type: "POST",
        url: "https://woj8p121s0.execute-api.us-east-1.amazonaws.com/production/contact-me",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message        
            $("#messages").addClass("alert-success");
            $("#messages").text("Message sent. Thank you! I will contact you shortly.");
            document.getElementById("contact-form").reset();
        },
        error: function () {
            // show an error message
            $("#messages").addClass("alert-danger");
            $("#messages").text("Message delivery failed.")
        }
    });
}