document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);

    // Send form data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", event.target.action, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Handle successful form submission (e.g., show success message)
            alert("Message sent successfully!");
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
            // Handle form submission error
            alert("An error occurred. Please try again later.");
        }
    };
    xhr.send(formData);
});
