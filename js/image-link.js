document.getElementById('show-image').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    var imageViewer = document.getElementById('image-viewer');
    var image = document.getElementById('image');
    var imageUrl = this.getAttribute('data-image');

    image.src = imageUrl;
    imageViewer.style.display = 'block';
});

// Optionnel : Ajouter un bouton ou cliquer en dehors pour fermer l'image
document.addEventListener('click', function(event) {
    var imageViewer = document.getElementById('image-viewer');
    if (!imageViewer.contains(event.target) && event.target.id !== 'show-image') {
        imageViewer.style.display = 'none';
    }
});
