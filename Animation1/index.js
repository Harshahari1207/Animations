const images = document.querySelectorAll('.img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

console.log(images[1].src);

let index = 0;
let timer;

function updateImage() {
    console.log(index);

  document.getElementById("slider").src = images[index].src;
  index = (index + 1) % images.length;
}

document.querySelector(".next").addEventListener("click", function() {
//   clearInterval(timer);
    index = (index) % images.length;
    console.log("next: "+index);
    updateImage();
});

document.querySelector(".prev").addEventListener("click", function() {
    
//   clearInterval(timer);
  index = (index + images.length - 2) % images.length;
  console.log("prev: "+index);
  updateImage();
});


timer = setInterval(updateImage, 5000);