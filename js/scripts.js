$(document).ready(function() {
    $("#letterForm").submit(function(event) {
      var nameInput = $("input#name").val();
      var addressInput = $("input#address").val();
      var emailInput = $("input#email").val();

      $("#name1").text(nameInput);
      $("#address1").text(addressInput);
      $("#email1").text(emailInput);

      $("#initially-hidden").show();

      event.preventDefault();
    });
  });
