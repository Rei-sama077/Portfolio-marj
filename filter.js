document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const techItems = document.querySelectorAll('.tech-tool-item');
    
    function filterItems(filterValue) {
        techItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            filterItems(filterValue);
        });
    });
    
    const defaultTab = document.querySelector('.tab-item[data-filter="all"]');
    if (defaultTab) {
        defaultTab.click(); 
    }
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};


const layers = document.querySelectorAll('.layer');

function parallax() {
  const y = window.scrollY;
  // Only apply transform to the last layer (index 5)
  layers[5].style.transform = `translateY(${0.5 * y}px)`; // Adjust 0.5 to control speed
}

window.addEventListener('scroll', parallax, false);