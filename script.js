document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h1');
    heroText.classList.add('slide-in');
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section h2').forEach(h2 => {
    observer.observe(h2);
});
