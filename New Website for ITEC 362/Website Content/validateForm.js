document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");

    if (form && nameInput) { // Ensure form and input element exist
        form.addEventListener("submit", function(event) {
            const nameValue = nameInput.value.trim();
            const nameRegex = /^[a-zA-Z\s]+$/;

            if (!nameRegex.test(nameValue)) {
                alert("Invalid input: Name should only contain letters and spaces.");
                event.preventDefault(); // Prevent form submission
            }
        });
    } else {
        console.error("Form or name input element not found.");
    }
});
