document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("pages");

    select.addEventListener("change", function() {
        var selectedValue = select.value;

        if (selectedValue) {
            window.location.href = selectedValue; // Redirect to selected page
        }
    });
});