document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    document.body.addEventListener("click", function() {
        audio.play();
    });
});
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 3500);
};
