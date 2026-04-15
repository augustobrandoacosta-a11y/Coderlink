const toggleBtn = document.getElementById('theme-toggle');
let isDarker = false;

toggleBtn.addEventListener('click', () => {
    if (!isDarker) {
        document.body.style.backgroundColor = "#010409";
        toggleBtn.innerText = "Original Vibe";
    } else {
        document.body.style.backgroundColor = "#0d1117";
        toggleBtn.innerText = "Change Vibe";
    }
    isDarker = !isDarker;
});
