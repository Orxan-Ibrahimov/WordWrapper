let text = document.querySelector(".text > .special");
window.addEventListener('load', () => {
    WordWrapper();
    setInterval(() => {
        WordWrapper();
    }, 6000);
});

function WordWrapper(params) {
    setTimeout(() => {
        text.textContent = "Freelancer";
        text.style.color = "red";
        console.log(i);
    }, 0);
    
    setTimeout(() => {
        text.textContent = "Blogger";
        text.style.color = "green";
    }, 2000);

    setTimeout(() => {
        text.textContent = "Developer";
        text.style.color = "blue";  
    }, 4000);
}