window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');
    const navbarA = document.querySelectorAll('.nav-bar ul a');
    const langBtn = document.getElementById('lang-btn');
    const langIcon = langBtn ? langBtn.querySelector('ion-icon') : null;
    const themeIcon = document.querySelector('#theme-icon ion-icon');
    const rootStyles = getComputedStyle(document.documentElement);
    const darkColor = rootStyles.getPropertyValue('--text-dark-color').trim();
    const lightColor = rootStyles.getPropertyValue('--text-light-color').trim();
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        navbarA.forEach(a => a.style.color = darkColor);
        if (langBtn) langBtn.style.color = darkColor;
        if (langIcon) langIcon.style.color = darkColor;
        if (themeIcon) themeIcon.style.color = darkColor;
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        navbarA.forEach(a => a.style.color = lightColor);
        if (langBtn) langBtn.style.color = lightColor;
        if (langIcon) langIcon.style.color = lightColor;
        if (themeIcon) themeIcon.style.color = lightColor;
    }
});


// Language dropdown
const langDropdown = document.querySelector('.lang-dropdown');
const langBtn = document.getElementById('lang-btn');
let currentLang = 'vi'; 

langBtn.addEventListener('click', function () {
    if (currentLang === 'vi') {
        currentLang = 'en';
        langBtn.textContent = 'VIE';
        
    } else {
        currentLang = 'vi';
        langBtn.textContent = 'ENG';
        // Thực hiện đổi sang tiếng Việt ở đây nếu muốn
    }
});

// Đóng menu khi click ra ngoài
document.addEventListener('click', function () {
    langDropdown.classList.remove('open');
});

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.querySelector('#theme-icon ion-icon');

let isDark = false; // Mặc định là sáng

themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark-theme', isDark);
    // Đổi icon
    themeIcon.setAttribute('name', isDark ? 'moon-outline' : 'sunny-outline');
});