function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
    }
}
