const toggleButton = document.querySelector('.toggle-button');
const wrapper = document.querySelector('.wrapper');

if (toggleButton && wrapper) {
    toggleButton.addEventListener('click', function() {
        console.log('Toggle button clicked');
        wrapper.classList.toggle('expanded');
    });
} else {
    console.error('Les éléments .toggle-button ou .wrapper sont introuvables sur cette page.');
}
