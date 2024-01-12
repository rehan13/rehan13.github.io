document.addEventListener("DOMContentLoaded", function(){
    // Functionality for the landing page
    const landingContent = document.getElementById('landingContent');
    if (landingContent) {
        landingContent.addEventListener('click', function() {
            document.body.classList.add('overflow-hidden');
            this.style.transform = 'translateY(-100%)';
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1000); // Transition duration
        });
    }

    // Functionality for delayed navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            let target = this.getAttribute('href');
            document.getElementById('loadingOverlay').style.display = 'block';
            setTimeout(function(){
                window.location.href = target;
            }, 1000); // 1 second delay (adjust as needed)
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var profilePic = document.querySelector('.profile-picture');
    var body = document.body;

    profilePic.addEventListener('click', function() {
        this.classList.toggle('enlargedImage');

        // Optional: Add overlay
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);

        // Close image when clicking on the overlay
        overlay.addEventListener('click', function() {
            profilePic.classList.remove('enlargedImage');
            this.remove();
        });
    });
});

