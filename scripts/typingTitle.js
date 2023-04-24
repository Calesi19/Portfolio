const titleElement = document.querySelector('.typing-title');
titleElement.style.color = 'transparent';

let titleText = titleElement.innerHTML;
titleElement.innerHTML = null;

let currentIndex = 0;
titleElement.style.color = '#1d1d1f';

const originalMessage = titleText;
const newMessage = 'Welcome!';

function typeTitle() {
  if (currentIndex < titleText.length) {
    titleElement.innerHTML += titleText.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeTitle, 150);
  } else {
    setTimeout(deleteTitle, 10000);
  }
}

function deleteTitle() {
  if (titleElement.innerHTML.length > 0) {
    titleElement.innerHTML = titleElement.innerHTML.slice(0, -1);
    setTimeout(deleteTitle, 100);
  } else {
    currentIndex = 0;
    if (titleText === originalMessage) {
        titleText = newMessage;
    }
    else {
        titleText = originalMessage;
    }

    setTimeout(typeTitle, 150);
  }
}

typeTitle();


