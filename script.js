document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe Feature Cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Add 'visible' class styles dynamically if not in CSS
    const style = document.createElement('style');
    style.textContent = `
        .feature-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Parallax Effect for Orbs
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const orb1 = document.querySelector('.orb-1');
        const orb2 = document.querySelector('.orb-2');
        const orb3 = document.querySelector('.orb-3');

        if (orb1) orb1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        if (orb2) orb2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        if (orb3) orb3.style.transform = `translate(-50%, -50%) translate(${x * 15}px, ${y * 15}px)`;
    });
});
