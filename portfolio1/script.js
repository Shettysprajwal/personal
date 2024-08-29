const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

/* Optionally: For smooth scrolling to sections */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// skills
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgressBars() {
        progressBars.forEach(bar => {
            if (isInViewport(bar) && !bar.classList.contains('animated')) {
                bar.style.width = bar.getAttribute('data-progress');
                bar.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Run on load in case elements are already in viewport
});


// education

function hoverEffect(element) {
    element.style.transform = "translateY(-10px)";
    element.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
}

function removeHoverEffect(element) {
    element.style.transform = "translateY(0)";
    element.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
}

// contact
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
