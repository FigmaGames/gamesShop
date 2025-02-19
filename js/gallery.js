document.addEventListener("DOMContentLoaded", function () {
    // Actualiza el texto del botón al seleccionar una opción
    document.querySelectorAll('#filterDropdown + .dropdown-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedText = this.getAttribute('data-value');
            document.getElementById('filterDropdown').textContent = selectedText;
        });
    });
});