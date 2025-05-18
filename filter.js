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

