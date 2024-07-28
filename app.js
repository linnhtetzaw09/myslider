//UI

const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
// console.log(slides);  //HTML collection (3)
// console.log(dots);      //Node List (3)

let currslide = 1;

document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});

carousel(currslide);

function carousel(slidenum){

    let x,y;

    for(x=0; x < slides.length; x++){
        slides[x].style.display = "none";
    }

    for(y=0; y < slides.length; y++){

        dots[y].classList.remove("active");
    }

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;  //3
    }

    slides[currslide - 1].style.display = "block";

    dots[currslide - 1].classList.add("active");
}

for(let b = 0; b < dots.length; b++){
    dots[b].addEventListener('click',function(){

        currslide = this.getAttribute('data-bs-slide-dot');
        console.log(currslide);
        
        carousel(currslide);

    });
}