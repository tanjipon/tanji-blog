/**
 * Dark mode toggle functionality for TechByte Hugo theme
 */
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle elements
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Function to set the theme
    const setTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    };
    
    // Function to toggle the theme
    const toggleTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    };
    
    // Initialize theme based on system preference or previous choice
    const initializeTheme = () => {
      // Check for saved theme preference or use system preference
      if (localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && 
           window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    
    // Add event listeners for theme toggles
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
      themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.theme) {
        if (e.matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }
    });
    
    // Initialize the theme
    initializeTheme();
  });