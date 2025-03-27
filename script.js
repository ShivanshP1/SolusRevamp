// Function to toggle between light and dark theme
function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Save theme to localStorage
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Save theme to localStorage
  }
}

// Load the saved theme from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme'); // Get the saved theme from localStorage
  
  if (savedTheme) {
    setTheme(savedTheme); // Apply the saved theme
  } else {
    setTheme('dark'); // Default to dark theme if no theme is saved
  }

  // Font size selector logic
  document.getElementById('font-size-selector').addEventListener('change', function() {
    const fontSize = this.value;
    const content = document.querySelector('.content'); 
    
    content.classList.remove('small', 'medium', 'large');
    content.classList.add(fontSize);
  });

  // Initialize the collapsible boxes
  document.querySelectorAll('.collapsible-box').forEach(box => {
    const content = box.querySelector('.collapsible-content');
    const button = box.querySelector('.collapse-toggle');
    
    content.classList.remove('hidden');
    button.textContent = '−'; 
  });
});
