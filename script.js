document.addEventListener('DOMContentLoaded', function() {
    // Handle video thumbnail clicks
    var videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(function(item) {
        var thumbnail = item.querySelector('img');
        var videoUrl = item.querySelector('a').href;

        thumbnail.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(videoUrl, '_blank');
        });
    });

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        var name = document.querySelector('#contact-form input[type="text"]').value;
        var email = document.querySelector('#contact-form input[type="email"]').value;
        var message = document.querySelector('#contact-form textarea').value;

        // Perform form validation (you can add more robust validation as needed)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields in the form.');
            return;
        }

        // Simulate sending form data to a backend or display a success message
        alert('Message sent successfully!');
       
