function darkToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var img = document.getElementById('github-logo');
if (document.body.classList.contains('dark-mode')) {
  img.src = 'github_logo_dark.png';
} else {
  img.src = 'github_logo_light.png';
}
