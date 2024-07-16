document.addEventListener('DOMContentLoaded', function() {
    // Spinner functionality
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');

    // Show spinner when DOM is fully loaded
    spinner.style.display = 'flex';
    content.style.display = 'none';

    // Hide spinner when the entire page is fully loaded
    window.addEventListener('load', function() {
        spinner.style.display = 'none';
        content.style.display = 'block';
    });

    // Modal functionality
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".hero-content button");
    const span = document.querySelector(".close");

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
