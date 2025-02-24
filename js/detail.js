document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title") || "Geshin Impact";
  const price = params.get("price") || "69.25€";
  const image = params.get("image") || "../resources/images/genshin.png";

  // Actualiza los elementos en detail.html. Asegúrate de tener estos IDs en el HTML.
  const titleElem = document.getElementById("gameTitle");
  const priceElem = document.getElementById("gamePrice");
  const imageElem = document.getElementById("gameImage");
  const cardTitle = document.getElementById("cardTitle");
  const pTitle = document.getElementById("pTitle");
  
  if (titleElem) {
    titleElem.textContent = title;
    pTitle.textContent = title;
  }
  if (priceElem) {
    priceElem.textContent = price;
  }
  if (cardTitle) {
    cardTitle.textContent = title;
  }
  if (imageElem) {
    imageElem.setAttribute("src", image);
  }
});