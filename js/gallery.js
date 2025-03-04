document.addEventListener("DOMContentLoaded", function () {
    // Actualiza el texto del botón al seleccionar una opción
    document.querySelectorAll('#filterDropdown + .dropdown-menu .dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedText = this.getAttribute('data-value');
            document.getElementById('filterDropdown').textContent = selectedText;
        });
    });

    const cards = document.querySelectorAll("#contenedorCards .card.game-card");
  
    cards.forEach(card => {
      card.addEventListener("click", function () {
        const title = card.querySelector("h6")?.textContent.trim() || "";
        const price = card.querySelector("p")?.textContent.trim() || "";
        const imageSrc = card.querySelector("img")?.getAttribute("src") || "";
  
        // Se crea una query string con los datos de la tarjeta
        const params = new URLSearchParams({ title, price, image: imageSrc });
        // Redirige a detail.html, pasando los datos en la URL
        window.location.href = `detail.html?${params.toString()}`;
      });
    });
  });
