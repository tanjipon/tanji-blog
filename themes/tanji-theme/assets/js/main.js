document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
  
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  
    // Mobile theme toggle icon
    const themeToggleMobileIcon = document.getElementById('theme-toggle-mobile-icon');
    if (themeToggleMobileIcon) {
      themeToggleMobileIcon.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.theme = 'light';
        } else {
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
        }
      });
    }
  
    // Handle font size adjustment for better readability
    const adjustFontSize = () => {
      const htmlElement = document.documentElement;
      // Only apply special sizes on smaller screens
      if (window.innerWidth <= 640) {
        htmlElement.style.fontSize = '18px';
      } else {
        htmlElement.style.fontSize = '';
      }
    };
  
    // Initialize font size and listen for screen resize
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
  
    // Make tables responsive
    document.querySelectorAll('table').forEach(table => {
      if (!table.parentElement.classList.contains('table-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-wrapper', 'overflow-x-auto', 'my-4');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  
    // Add large tap targets to links in mobile view
    if (window.innerWidth <= 640) {
      document.querySelectorAll('.prose a').forEach(link => {
        link.classList.add('py-1', 'inline-block');
      });
    }
  
    // Add floating "back to top" button on long articles
    const content = document.querySelector('.post-content');
    if (content && content.offsetHeight > 2000) {
      const backToTopBtn = document.createElement('button');
      backToTopBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="<http://www.w3.org/2000/svg>">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      `;
      backToTopBtn.classList.add(
        'fixed', 'bottom-6', 'right-6', 'p-3', 'rounded-full',
        'bg-primary-600', 'text-white', 'shadow-lg',
        'opacity-0', 'transition-opacity', 'duration-300', 'z-50'
      );
      document.body.appendChild(backToTopBtn);
  
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  
      // Show/hide button based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0');
          backToTopBtn.classList.add('opacity-100');
        } else {
          backToTopBtn.classList.remove('opacity-100');
          backToTopBtn.classList.add('opacity-0');
        }
      });
    }
  });
  