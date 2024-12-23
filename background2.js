const button = document.getElementById('change-bg-button');
let currentImageIndex = 0;
const images = [
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/1477356/pexels-photo-1477356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

button.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});
