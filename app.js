//Select
const text = document.querySelector(".text"),
      image = document.querySelector(".image");

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  let textPosition = text.getBoundingClientRect().top;
  let windowHeight = window.innerHeight/1.2;
  if(windowHeight>textPosition){
    text.classList.remove("push-left");
    image.classList.remove("push-right");
  }else{
    text.classList.add("push-left");
    image.classList.add("push-right");
  }
  
}

const texter = document.querySelector(".texter"),
      imager = document.querySelector(".imager");

window.addEventListener("scroll", appearOnScroller);

function appearOnScroller() {
  let texterPosition = texter.getBoundingClientRect().top;
  let windowHeighter = window.innerHeight/1.2;
  if(windowHeighter>texterPosition){
    texter.classList.remove("pushtext");
    imager.classList.remove("pushimage");
  }else{
    texter.classList.add("pushtext");
    imager.classList.add("pushimage");
  }
  
}