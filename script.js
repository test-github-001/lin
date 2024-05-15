window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.dark-fantasy-description img');
    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.dark-fantasy-magic img');
    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.creatures img');
    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});