// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
    $(document).ready(function () {
        $('#calculateBtn').click(function () {
            // clears the error message if they typed in an invalid input
            $('#hoursError').text('');

            // getting the user input by using the ID of hours
            var hours = parseFloat($('#hours').val());

            // making sure the input isn't negative
            if (isNaN(hours) || hours < 0) {
                $('#hoursError').text('Please enter a valid, positive number.');
                return;
            }
  
            var hourlyRate = 1000;

            // calculating total
            var total = hours * hourlyRate;

            // Display total using the ID of total
            $('#total').val('$' + total.toFixed(2));
        });
    });