document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            if (event.target.closest('.dropdown-content a')) {
                return;
            }

            event.preventDefault();

            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('open');
                }
            });

            this.classList.toggle('open');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });
});
