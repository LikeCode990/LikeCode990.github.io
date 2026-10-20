const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
}

if (nav && navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        setMenu(!nav.classList.contains('is-open'));
    });

    // Close the menu after picking a link, pressing Escape or clicking outside
    navLinks.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setMenu(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setMenu(false);
            navToggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target)) {
            setMenu(false);
        }
    });

    // Highlight the link of the current page
    const currentPath = location.pathname.replace(/\/$/, '/index.html');
    for (const link of navLinks.querySelectorAll('a')) {
        if (new URL(link.href).pathname === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    }
}
