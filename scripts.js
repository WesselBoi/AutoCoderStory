// Detect scroll and apply animation for chapters and images
window.addEventListener('scroll', function() {
    const chapters = document.querySelectorAll('.chapter');
    const triggerPoint = window.innerHeight / 1.3;

    chapters.forEach(chapter => {
        const top = chapter.getBoundingClientRect().top;

        if (top < triggerPoint) {
            chapter.style.opacity = '1';
            chapter.classList.add('fade'); // Add fade effect
        } else {
            chapter.style.opacity = '0';
            chapter.classList.remove('fade'); // Remove fade effect
        }
    });
});

