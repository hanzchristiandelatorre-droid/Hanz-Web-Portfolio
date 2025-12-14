// State management
let currentPage = 'home';
let previousPage = 'home';

// Navigation function
function navigateTo(page, closeMobile) {
    closeMobile = closeMobile || false;
    
    // Update previous page
    previousPage = currentPage;
    currentPage = page;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(p) {
        p.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(page + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(function(link) {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Show/hide back button
    const backBtn = document.getElementById('backBtn');
    if (page === 'home' && previousPage !== 'home') {
        backBtn.classList.add('show');
    } else {
        backBtn.classList.remove('show');
    }
    
    // Close mobile menu if requested
    if (closeMobile) {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.classList.remove('active');
        
        // Update menu icon
        const menuIcon = document.getElementById('menuIcon');
        menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12" stroke-width="2"></line><line x1="3" y1="6" x2="21" y2="6" stroke-width="2"></line><line x1="3" y1="18" x2="21" y2="18" stroke-width="2"></line>';
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Back button function
function goBack() {
    navigateTo(previousPage);
}

// Toggle mobile menu
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    mobileMenu.classList.toggle('active');
    
    // Update icon
    if (mobileMenu.classList.contains('active')) {
        menuIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18" stroke-width="2"></line><line x1="6" y1="6" x2="18" y2="18" stroke-width="2"></line>';
    } else {
        menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12" stroke-width="2"></line><line x1="3" y1="6" x2="21" y2="6" stroke-width="2"></line><line x1="3" y1="18" x2="21" y2="18" stroke-width="2"></line>';
    }
}

// Initialize on page load
window.addEventListener('load', function() {
    console.log('Page loaded successfully!');
    
    // Make sure home page is visible
    navigateTo('home');
    
    // Test button clicks
    console.log('Navigation setup complete');
});