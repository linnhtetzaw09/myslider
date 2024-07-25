//UI

const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
console.log(slides);  //HTML collection (3)
console.log(dots);      //Node List (3)

let currslide = 1;

document.getElementById('prev').addEventListener('click',function(){
    // console.log('i am prev');
});

document.getElementById('next').addEventListener('click',function(){
    // console.log('i am next');
});