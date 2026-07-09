$(function () {

    // Attach jqBootstrapValidation to all form inputs & textarea
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function ($form, event, errors) {
            // errors shown inline by jqBootstrapValidation
        },

        submitSuccess: function ($form, event) {
            event.preventDefault();

            var name    = $("#name").val();
            var email   = $("#email").val();
            var phone   = $("#phone").val();
            var subject = $("#subject").val();
            var message = $("#message").val();

            var $btn = $("#sendMessageButton");
            $btn.prop("disabled", true).html('Sending&hellip; <i class="fa fa-spinner fa-spin"></i>');

            $.ajax({
                url:  "contact.php",
                type: "POST",
                data: {
                    name:    name,
                    email:   email,
                    phone:   phone,
                    subject: subject,
                    message: message
                },
                cache: false,

                success: function () {
                    $("#success").html(
                        "<div class='alert alert-success alert-dismissible'>" +
                        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
                        "<strong><i class='fa fa-check-circle mr-2'></i>Message sent!</strong> " +
                        "Thank you, " + name + ". We will be in touch shortly." +
                        "</div>"
                    );
                    $("#contactForm")[0].reset();
                },

                error: function () {
                    $("#success").html(
                        "<div class='alert alert-danger alert-dismissible'>" +
                        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
                        "<strong><i class='fa fa-exclamation-circle mr-2'></i>Oops!</strong> " +
                        "Sorry " + name + ", our mail server did not respond. Please call us directly." +
                        "</div>"
                    );
                    $("#contactForm")[0].reset();
                },

                complete: function () {
                    setTimeout(function () {
                        $btn.prop("disabled", false)
                            .html('Send Message <i class="fa fa-paper-plane"></i>');
                        setTimeout(function () {
                            $("#success .alert").alert("close");
                        }, 6000);
                    }, 1000);
                }
            });
        },

        filter: function () {
            return $(this).is(":visible");
        }
    });

    $("a[data-toggle='tab']").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// Clear alert when user focuses name field again
$("#name").focus(function () {
    $("#success").html("");
});
