const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    const imgSrc = 'images/pic' + i + '.jpg'
    newImage.setAttribute('src', imgSrc);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', imgSrc);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});