const lines = document.querySelectorAll("#typingList li");

lines.forEach((line, index) => {
  const fullText = line.textContent;
  line.textContent = "";
  setTimeout(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      line.textContent += fullText[charIndex];
      charIndex++;
      line.style.width = charIndex + "ch";
      if (charIndex === fullText.length) {
        clearInterval(interval);
        line.style.border = "none";
      }
    }, 50); // typing speed
  }, index * 1000); // delay between each line
});


