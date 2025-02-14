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
const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')


let idx = 0

let interval = setInterval(run, 7000)
  
function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 7) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`
}
function resetInterval() {  
  clearInterval(interval)
  interval = setInterval(run, 2000)
  sideComponents.style

  
}

const sideComponents = document.querySelectorAll('.side-component');
const imageContainer = document.getElementById('imgs');

sideComponents.forEach((sideComponent, index) => {
    sideComponent.addEventListener('click', () => {
      resetInterval()

        imageContainer.style.transform = `translateX(-${index * 100}%)`;
       idx=index;
    });
});
const quake = document.getElementById('quake')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgsa = document.querySelectorAll('#quake img')
let idxs=0
let pastIndices = [];
rightBtn.addEventListener('click', () => {
  idxs++
  changeImages()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
 
  idxs--
  changeImages()
  resetInterval()
})

function changeImages() {
  if (idxs >= 2|| idxs < 0) {
    idxs = pastIndices.pop(); 
    return; 
  }

  quake.style.transform = `translateX(${-idxs * 100}%)`;


}
function resetInterval() {  
clearInterval(interval)
interval = setInterval(run, 2000)



}
rightBtn.addEventListener('click', () => {
  idx++
  pastIndices.push(idxs);
  changeImages()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  pastIndices.push(idxs);
  changeImages()
  resetInterval()
})

        let currentIndex = 0;

        function changeBackgroundColor() {
          const colors = ['#c5c5c5', '#121212', '#121212', '#121212', '#121212','#121212'];
            sideComponents.forEach((component, index) => {
                component.style.backgroundColor = colors[(currentIndex - index)];
            });
            currentIndex = (currentIndex + 1);
        }
        setTimeout(changeBackgroundColor, 0);
        setInterval(changeBackgroundColor, 7000);