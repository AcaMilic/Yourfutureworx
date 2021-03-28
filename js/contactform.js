// // contact form


$("#sendForm").click(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const message = $("#message").val();
    if (name == '') {
      $("#name").addClass('error');
    } else {
      $("#name").removeClass('error');
    }
    if (message == '') {
      $("#message").addClass('error');
    } else {
      $("#message").removeClass('error');
    }
    if (phone == '') {
      $("#phone").addClass('error');
    } else {
      $("#phone").removeClass('error');
    }
    if (email == '') {
      $("#email").addClass('error');
    } else {
      $("#email").removeClass('error');
      if (email != '' && name != '' && message != ''  && phone != '') {
    }
  
      $.ajax({
          method: "POST",
          url: "./form/contactform.php",
          data: {
            email: email,
            name: name,
            message: message,
            phone: phone
          }
        })
        .done(function (msg) {
          console.log("Message Sent!");
          $("#success").show();
        });
    }
  });
  