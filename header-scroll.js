document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('mainHeader');
    const scrollThreshold = 10;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, 
                behavior: 'smooth'
            });
        }
    });
});


tabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); // <-- This is critical
        const filter = tab.getAttribute('data-filter');

        // Update active class
        tabItems.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show/hide items
        techToolItems.forEach(item => {
            const category = item.getAttribute('data-category');
            item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        });
    });
});
