function toggleBox(button) {
  const content = button.closest('.collapsible-header').nextElementSibling;
  content.classList.toggle('hidden');
  
  const toggleIcon = button;
  toggleIcon.textContent = content.classList.contains('hidden') ? '+' : '−';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.collapsible-box').forEach(box => {
    const content = box.querySelector('.collapsible-content');
    const button = box.querySelector('.collapse-toggle');

    content.classList.remove('hidden');
    button.textContent = '−'; 
  });
});

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }
}

document.getElementById('font-size-selector').addEventListener('change', function() {
  const fontSize = this.value;
  const content = document.querySelector('.content'); 
  
  content.classList.remove('small', 'medium', 'large');
  content.classList.add(fontSize);
});


function toggleProgressContent() {
  let content = document.getElementById("progress-content");
  content.classList.toggle("show");
}
