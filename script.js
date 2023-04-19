


let image = document.querySelector('.pepsimage');
let background = document.querySelector('body');

document.querySelector('.changeImg').addEventListener('click',function(){
    image.src = './pepsi001 (1).png';
    background.style.backgroundColor = '#0062be'
})

document.querySelector('.changeImg2').addEventListener('click',function(){
    image.src = './pepsi002.png';
    background.style.backgroundColor = '#e60c2c';
})


document.querySelector('.changeImg3').addEventListener('click',function(){
    image.src = './pepsi003.png'
    background.style.backgroundColor = '#1e1e1e'
})





