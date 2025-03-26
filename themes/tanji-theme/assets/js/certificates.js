/**
 * JavaScript for enhancing the certificates display page
 * Adds filtering, sorting, and visual enhancements
 */
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const certificatesContainer = document.querySelector('.grid');
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    // Get all tags from certificates
    if (certificateCards.length) {
      const allTags = new Set();
      
      // Collect all unique tags
      certificateCards.forEach(card => {
        const tagElements = card.querySelectorAll('.certificate-card .tag');
        tagElements.forEach(tag => {
          allTags.add(tag.textContent.trim());
        });
      });
      
      // Create filter buttons
      if (allTags.size > 0) {
        const filterContainer = document.querySelector('.flex.flex-wrap.mb-4');
        
        if (filterContainer) {
          // Add "All" filter button
          const allButton = document.createElement('button');
          allButton.className = 'filter-btn px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors';
          allButton.textContent = 'All';
          allButton.dataset.filter = 'all';
          allButton.setAttribute('aria-pressed', 'true');
          filterContainer.appendChild(allButton);
          
          // Add tag filter buttons
          allTags.forEach(tag => {
            const button = document.createElement('button');
            button.className = 'filter-btn px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-900 dark:hover:text-primary-100 transition-colors';
            button.textContent = tag;
            button.dataset.filter = tag;
            button.setAttribute('aria-pressed', 'false');
            filterContainer.appendChild(button);
          });
          
          // Add click event listeners for filter buttons
          const filterButtons = document.querySelectorAll('.filter-btn');
          filterButtons.forEach(button => {
            button.addEventListener('click', function() {
              const filter = this.dataset.filter;
              
              // Update active button state
              filterButtons.forEach(btn => {
                btn.classList.remove('bg-primary-100', 'dark:bg-primary-900', 'text-primary-800', 'dark:text-primary-100');
                btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
                btn.setAttribute('aria-pressed', 'false');
              });
              
              this.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
              this.classList.add('bg-primary-100', 'dark:bg-primary-900', 'text-primary-800', 'dark:text-primary-100');
              this.setAttribute('aria-pressed', 'true');
              
              // Filter cards
              if (filter === 'all') {
                certificateCards.forEach(card => {
                  card.style.display = '';
                });
              } else {
                certificateCards.forEach(card => {
                  const cardTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.trim());
                  if (cardTags.includes(filter)) {
                    card.style.display = '';
                  } else {
                    card.style.display = 'none';
                  }
                });
              }
            });
          });
        }
      }
    }
    
    // Initialize Credly badges if they exist
    if (typeof window.credlyRefresh === 'function') {
      window.credlyRefresh();
    }
  });