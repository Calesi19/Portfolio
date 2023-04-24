const titleElement = document.querySelector('.typing-title');
titleElement.style.color = 'transparent';

const titleText = titleElement.innerHTML;
titleElement.innerHTML = null;


let currentIndex = 0;
titleElement.style.color = '#1d1d1f';

function typeTitle() {
    if (currentIndex < titleText.length) {
        titleElement.innerHTML += titleText.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeTitle, 150);
    }
}

typeTitle();