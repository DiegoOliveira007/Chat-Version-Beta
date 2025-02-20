document.querySelectorAll(".users a").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "./chat.html?user=" + this.textContent.trim();
    });
});