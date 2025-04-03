document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("pages");

    select.addEventListener("change", function() {
        var selectedValue = select.value;

        if (selectedValue) {
            window.location.href = selectedValue; // Redirect to selected page
        }
    });
});

let me = "Catarina";

let age = 25;

let ageMultiplied = age * 7;

console.log(ageMultiplied.toString(), "is my age multiplied by 7");

let friends = ["Miriam", "Leonor", "David"];

let object = {
    name: "Catarina",
    age: 25,
    isStudent: true,
};

let friendChar = [
    {
        name: "Miriam",
        age: 23,
        isStudent: false,
    },
    {
        name: "Leonor",
        age: 19,
        isStudent: true,
    },
    {
        name: "David",
        age: 23,
        isStudent: true,
    },
];