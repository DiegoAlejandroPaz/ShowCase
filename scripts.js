// scripts.js


function navigateImages(direction) {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    
    images.forEach((image, index) => {
        if (image.classList.contains('active')) {
            currentIndex = index;
            image.classList.remove('active');
        }
    });

    
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    
    images[currentIndex].classList.add('active');
}

// Event listeners for navigation arrows
document.querySelector('.prev').addEventListener('click', () => navigateImages('prev'));
document.querySelector('.next').addEventListener('click', () => navigateImages('next'));
