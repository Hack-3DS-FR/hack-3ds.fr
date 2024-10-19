document.querySelector('.toggle-button').addEventListener('click', function() {
    console.log('Toggle button clicked');
    document.querySelector('.wrapper').classList.toggle('expanded');
});