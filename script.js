function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}

function toggleBox(button) {
  const content = button.closest('.collapsible-box').querySelector('.collapsible-content');
  content.classList.toggle('hidden');
  button.textContent = content.classList.contains('hidden') ? '+' : '−';
}
