// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const cancelBtn = document.getElementById('cancel-btn');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });

    cancelBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        menuToggle.checked = false; // Uncheck the checkbox to close the menu
    });
});


window.onload = function() {
    // Check if the alert has been shown before
    if (!localStorage.getItem('alertShown')) {
        // Show the alert
        alert('Website not fully complete/ Soon Fully lunch');

        // Set the flag in localStorage to prevent showing the alert again
        localStorage.setItem('alertShown', 'true');
    }};