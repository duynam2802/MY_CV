window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'transparent'; 
        navbar.style.boxShadow = 'none';         
    }
});
