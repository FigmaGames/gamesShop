// language: js
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const price = params.get("price");
  const image = params.get("image");

  // Actualiza los elementos en detail.html. Asegúrate de tener estos IDs en el HTML.
  const titleElem = document.getElementById("gameTitle");
  const priceElem = document.getElementById("gamePrice");
  const imageElem = document.getElementById("gameImage");
  const cardTitle = document.getElementById("cardTitle");
  if (titleElem) {
    titleElem.textContent = title;
  }
  if (priceElem) {
    priceElem.textContent = price;
  }
  if (cardTitle) {
    cardTitle.textContent = title;
  }
  if (imageElem && image) {
    imageElem.setAttribute("src", image);
  }
});