document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Optional: Animate hamburger icon to 'X'
            mobileMenuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });
    }
});
