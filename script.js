document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. TYPED.JS INITIALIZATION
    // ----------------------------------------------------
    var typed = new Typed('#element', {
        strings: ['Software Developer', 'Full-Stack Developer', 'Problem Solver'],
        typeSpeed: 70, 
        backSpeed: 50, 
        loop: true, 
        showCursor: true, 
        cursorChar: '|', 
    });

    // ----------------------------------------------------
    // 2. THEME TOGGLE LOGIC (Dark/Light Mode)
    // ----------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    
    const setTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.classList.replace('fa-sun', 'fa-moon'); 
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            themeToggle.classList.replace('fa-moon', 'fa-sun'); 
            localStorage.setItem('theme', 'dark');
        }
    };

    if (storedTheme === 'light') {
        setTheme('light');
    } else {
        setTheme('dark'); 
    }

    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.contains('light-mode');
        setTheme(isLightMode ? 'dark' : 'light');
    });
});

// ----------------------------------------------------
// 3. MOBILE NAVIGATION LOGIC
// ----------------------------------------------------

// Functionality for Mobile Navigation Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

const navLinksList = document.querySelectorAll('.nav-links a');

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});
