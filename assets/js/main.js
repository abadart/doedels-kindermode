const mobileNavToggle = document.getElementById('toggleMainNav');

function openNavigation() {
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
}

function closeNavigation() {
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
}

function toggleNavigation() {
    const open = mobileNavToggle.getAttribute('aria-expanded');
    open === 'false' ? openNavigation() : closeNavigation();
}

mobileNavToggle.addEventListener('click', toggleNavigation);

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        mobileNavToggle.focus();
        closeNavigation();
    }
});
