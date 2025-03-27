const collapseToggle = document.querySelector('.collapse-toggle');
const collapsibleContent = document.querySelector('.collapsible-content');
collapseToggle.addEventListener('click', function() {
  collapsibleContent.classList.toggle('hidden');
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
