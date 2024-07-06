// Hamburger menu toggle
function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
}

// Smooth scrolling with delay
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        scrollToSection(targetElement);
    });
});

function scrollToSection(target) {
    const scrollOptions = {
        top: target.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
    };

    window.scrollTo(scrollOptions);

    setTimeout(() => {
        // Adjust the scroll to stop at the section
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'auto'
        });
    }, 1000); // Adjust delay as needed
}

// Scroll animations
const sections = document.querySelectorAll('.content');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

sections.forEach(section => {
    appearOnScroll.observe(section);
});

// Modal pop-up
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const span = document.getElementsByClassName('close')[0];

    setTimeout(() => {
        modal.style.display = 'block';
    }, 3000);

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[type="email"]').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`;
    });
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
