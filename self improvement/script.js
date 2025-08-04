document.addEventListener('DOMContentLoaded', function() {

    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.carousel-controls .prev');
    const nextButton = document.querySelector('.carousel-controls .next');
    let currentIndex = 0;

    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        // Show the one at the specified index
        testimonials[index].classList.add('active');
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Event Listeners for carousel controls
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', showNext);
        prevButton.addEventListener('click', showPrev);
    }

    // Auto-play the carousel
    setInterval(showNext, 5000); // Change testimonial every 5 seconds

    // Initialize the first testimonial
    if (testimonials.length > 0) {
        showTestimonial(currentIndex);
    }

});