const button = document.getElementById('change-bg-button');
let currentImageIndex = 0;
const images = [
    'https://images.pexels.com/photos/20757802/pexels-photo-20757802/free-photo-of-night-sky-over-snowy-rocky-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3081835/pexels-photo-3081835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/902756/pexels-photo-902756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/365633/pexels-photo-365633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/414727/pexels-photo-414727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

];

button.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});


