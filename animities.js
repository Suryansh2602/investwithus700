
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll('#animated-list li');

    let delay = 0;
    listItems.forEach((item) => {
        item.style.opacity = 0;
        setTimeout(() => {
            typeLine(item, item.textContent);
        }, delay);
        delay += 1000;
    });

    function typeLine(element, text) {
        let charIndex = 0;
        element.textContent = '';
        element.style.opacity = 1;

        const interval = setInterval(() => {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
});



