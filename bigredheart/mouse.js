document.body.addEventListener("mousemove", function (event) {
    var heart = document.createElement("span");
    heart.style.position = "fixed";
    heart.style.top = `${event.pageY}px`;
    heart.style.left = `${event.pageX}px`;
    heart.style.color = 'red';
    heart.style.width = '1em';
    heart.style.height = '1em';
    heart.style.fontSize = 16;
    heart.style.animation = '1s';
    heart.style.opacity = 1;
    heart.style.zIndex = 2;
    heart.innerHTML = '<img src="/bigredheart/cursor.ico" />';
    document.body.appendChild(heart);
    var task = setInterval(function (heart) {
        // heart.style.top = `${parseInt(heart.style.top.replace("px", "")) - 18}px`;
        heart.style.opacity = heart.style.opacity - 0.1;
    }, 50, heart);
    setTimeout(function (task) {
        clearInterval(task);
    }, 500, task);
    setTimeout(function (e) {
        document.body.removeChild(e);
    }, 1000, heart)
});
