window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-bar');
    const navbarA = document.querySelectorAll('.nav-bar ul a');
    // const navbarulAfter = this.document.querySelectorAll('nav-bar ul a ')
    const langBtn = document.getElementById('lang-btn');
    const langIcon = langBtn ? langBtn.querySelector('ion-icon') : null;
    const themeIcon = document.querySelector('#theme-icon ion-icon');
    const rootStyles = getComputedStyle(document.documentElement);
    const darkColor = rootStyles.getPropertyValue('--text-dark-color').trim();
    const lightColor = rootStyles.getPropertyValue('--text-light-color').trim();
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        navbarA.forEach(a => a.style.color = darkColor);
        if (langBtn) langBtn.style.color = darkColor;
        if (langIcon) langIcon.style.color = darkColor;
        if (themeIcon) themeIcon.style.color = darkColor;
    } else {
        navbar.classList.remove('scrolled');
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
    // Thêm hiệu ứng
    themeIcon.classList.remove('theme-icon-animate');
    void themeIcon.offsetWidth;
    themeIcon.classList.add('theme-icon-animate');
});

// ...existing code...

document.addEventListener('DOMContentLoaded', function () {
    // Scroll spy cho navbar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-bar ul a');

    function activateNavLink() {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // trừ chiều cao navbar
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').replace('#', '') === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // chạy lần đầu

    // Hiệu ứng cho section about
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        aboutSection.classList.add('visible');
                    } else {
                        aboutSection.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );
        aboutObserver.observe(aboutSection);
    }

    // Hiệu ứng cho hobby-list
    const hobbyItems = document.querySelectorAll('.hobby-item');
    if (hobbyItems.length > 0) {
        const hobbyObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );
        hobbyItems.forEach(item => hobbyObserver.observe(item));
    }

    const langProgressBars = document.querySelectorAll('.skill-progress');
    if (langProgressBars.length > 0) {
        const progressObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const percent = bar.getAttribute('data-progress') || '0%';
                        bar.style.width = percent;
                        bar.classList.add('visible');
                    } else {
                        entry.target.style.width = '0';
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );
        langProgressBars.forEach(bar => progressObserver.observe(bar));
    }

    const skillItems = document.querySelectorAll('.skills');
    if (skillItems.length > 0) {
        const skillObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );
        skillItems.forEach(item => skillObserver.observe(item));
    }



    // thêm danh sách các môn học
    const courses = [
        { name: "Lập trình Web", time: "2025", status: "studying", statusText: "Đang học" },
        { name: "An toàn thông tin", time: "2025", status: "studying", statusText: "Đang học" },
        { name: "Lập trình Java", time: "2025", status: "completed", statusText: "Đã học" },
        { name: "Hệ điều hành", time: "2025", status: "completed", statusText: "Đã học" },
        { name: "Phân tích thiết kế giải thuật", time: "2024", status: "completed", statusText: "Đã học" },
        { name: "Công nghệ phần mềm", time: "2024", status: "completed", statusText: "Đã học" },
        { name: "Mạng máy tính", time: "2024", status: "completed", statusText: "Đã học" },
        { name: "Phân tích thiết kế hệ thống", time: "2024", status: "completed", statusText: "Đã học" },
        { name: "Lập trình hướng đối tượng", time: "2023", status: "completed", statusText: "Đã học" },
        { name: "Kỹ thuật lập trình", time: "2023", status: "completed", statusText: "Đã học" },
        { name: "Nhập môn ngành CNTT", time: "2023", status: "completed", statusText: "Đã học" },

    ]

    const courseList = document.getElementById('course-list');
    if (courseList) {
        courseList.innerHTML = courses.map(course => `
            <li class ="course-item">
            <div class="course-info">
                    <span class="course-name">${course.name}</span>
                    <span class="course-time">${course.time}</span>
                    <span class="course-status ${course.status}">${course.statusText}</span>
                </div>
            </li>
            `).join('');
    }

    // thêm các project dự án
    // ...existing code...

    const projects = [
        {
            img: "./assets/images/project_cv_img.png",
            title: "Website CV cá nhân",
            des: "Trang web giới thiệu bản thân với thiết kế hiện đại và animation mượt mà.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            link: "https://github.com/duynam2802/MY_CV",
            demo: "https://duynam2802.github.io/MY_CV/"
        },
        {
            img: "./assets/images/project_checkdeadline_img.png",
            title: "Phần mềm kiểm tra deadline",
            des: "Check Deadline App giúp tự động kiểm tra và thêm các sự kiện các môn học ở trang UTH course vào Google Calendar và Task.",
            tech: ["Python", "Google API"],
            link: "https://github.com/duynam2802/UTH_APP",
            demo: ""
        },
        {
            img: "./assets/images/chilgrowth.png",
            title: "Child Growth Tracking System ",
            des: "[Project nhóm]<br>Phần mềm theo dõi sự tăng trưởng của trẻ em.",
            tech: ["Java", "Html", "MySQL"],
            link: "https://github.com/duynam2802/UTH_APP",
            demo: ""
        }
    ];

    const projectList = document.querySelector('.project-list.collunm');
    if (projectList) {
        projectList.innerHTML = projects.map(project => `
        <div class="project-item card">
            <div class="project-img">
                <img src="${project.img}" alt="">
                <div class="overlay"></div>
                <div class="project-link">
                    ${project.demo ? `
                    <a href="${project.demo}" class="visit-project" target="_blank" title="Xem demo">
                        <span class="ti-export"></span>
                    </a>` : ''}
                    <a href="${project.link}" class="link-project" target="_blank" title="Xem Github">
                        <span class="ti-github"></span>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="title">${project.title}</h3>
                <p>${project.des}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    }

    const animatedEls = document.querySelectorAll('.card, .education.card, .courses.card, .project-item.card, .contact-form.card');
    function showOnScroll() {
        animatedEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', showOnScroll);
    showOnScroll();

});

// animation card
document.addEventListener('DOMContentLoaded', function () {
    const animatedEls = document.querySelectorAll('.card, .education.card, .courses.card, .project-item.card, .contact-form.card');
    function showOnScroll() {
        animatedEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
});



