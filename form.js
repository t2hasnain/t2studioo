document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    fetch('/submit', {
        method: 'POST',
        body: new URLSearchParams(new FormData(this)),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(text => {
        console.log(text); // Show success message or error in console
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

