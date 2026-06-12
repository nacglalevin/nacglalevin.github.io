document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById('typing');
  if (!el) return;
  const texts = [
    "Stay hungry, stay foolish.",
    "Talk is cheap. Show me the code.",
    "Hello, I'm Lalevin."
  ];
  let i = 0, j = 0, currentText = '', isDeleting = false;

  function type() {
    if (i < texts.length) {
      if (!isDeleting && j <= texts[i].length) {
        currentText = texts[i].substring(0, j++);
        el.textContent = currentText;
      }
      if (isDeleting && j >= 0) {
        currentText = texts[i].substring(0, j--);
        el.textContent = currentText;
      }
      if (j === texts[i].length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
      if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        if (i === texts.length) i = 0;
      }
      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    }
  }
  type();
});