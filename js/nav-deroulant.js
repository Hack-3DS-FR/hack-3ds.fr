document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            // Empêche la propagation de l'événement de clic pour les liens
            if (event.target.closest('.dropdown-content a')) {
                return;
            }

            event.preventDefault();

            // Ferme tous les autres menus déroulants
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('open');
                }
            });

            // Bascule l'état du menu déroulant cliqué
            this.classList.toggle('open');
        });
    });

    // Ferme tous les menus déroulants lorsqu'on clique en dehors
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });
});
