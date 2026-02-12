document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            if (mainNav.classList.contains('active')) {
                mobileMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            } else {
                mobileMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
            }
        });

        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
                }
            });
        });
    }

    // Read More functionality for CTA section
    const readMoreBtn = document.querySelector('.read-more-trigger');
    const hiddenContent = document.querySelectorAll('.cta-hidden-content');

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hiddenContent.forEach(el => {
                el.style.display = 'inline'; // Or block depending on element
                if (el.tagName === 'P') el.style.display = 'block';
            });
            readMoreBtn.style.display = 'none';
        });
    }
});
