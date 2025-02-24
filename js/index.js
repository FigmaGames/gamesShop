// Scroll to top button functionality
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Image carousel functionality
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
let idx = 0;
let interval = setInterval(run, 7000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if(idx > img.length - 7) {
    idx = 0;
  } else if(idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 100}%)`;
}

// Side component navigation
const sideComponents = document.querySelectorAll('.side-component');
const imageContainer = document.getElementById('imgs');

sideComponents.forEach((sideComponent, index) => {
  sideComponent.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(run, 7000);
    imageContainer.style.transform = `translateX(-${index * 100}%)`;
    idx = index;
  });
});

// Quake section navigation
const quake = document.getElementById('quake');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let idxs = 0;

rightBtn.addEventListener('click', () => {
  idxs++;
  if (idxs >= 2) {
    idxs = 0;
  }
  quake.style.transform = `translateX(${-idxs * 100}%)`;
  clearInterval(interval);
  interval = setInterval(run, 7000);
});

leftBtn.addEventListener('click', () => {
  idxs--;
  if (idxs < 0) {
    idxs = 1;
  }
  quake.style.transform = `translateX(${-idxs * 100}%)`;
  clearInterval(interval);
  interval = setInterval(run, 7000);
});

// Side component background color change
function changeBackgroundColor() {
  const colors = ['#c5c5c5', '#121212', '#121212', '#121212', '#121212', '#121212'];
  sideComponents.forEach((component, index) => {
    component.style.backgroundColor = colors[(currentIndex - index)];
  });
  currentIndex = (currentIndex + 1);
}

let currentIndex = 0;
setTimeout(changeBackgroundColor, 0);
setInterval(changeBackgroundColor, 7000);