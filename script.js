const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields.');
    } else {
        // Submit the form using AJAX or a similar method
        // ...
    }
});

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields.');
    } else {
        // Submit the form using AJAX or a similar method
        // ...
        alert('Your message has been sent out successfully!');
    }
});