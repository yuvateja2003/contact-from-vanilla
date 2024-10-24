document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            form.style.opacity = '0';
            form.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
                successMessage.classList.add('fade-in');
            }, 200);
        }, 300);
    });
});