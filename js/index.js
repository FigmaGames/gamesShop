function changeGame(imageSrc, title, description, gameDescription2, prize ) {
    document.getElementById('carouselImage').src = imageSrc;
    document.getElementById('gameTitle').innerText = title;
    document.getElementById('gameDescription').innerText = description;
    document.getElementById('gameDescription2').innerText = gameDescription2;
    document.getElementById('prize').innerText = prize;
}