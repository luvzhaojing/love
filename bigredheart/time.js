function getSubSecond() {
    var now = new Date().getTime(),
        start = new Date("2021-03-04 15:34:32");
    return parseInt((now - start) / 1000);
}
function getSub() {
    var time = getSubSecond();
    var day = parseInt(time / (24 * 60 * 60));
    time = time % (24 * 60 * 60);
    var hour = parseInt(time / (60 * 60));
    time = time % (60 * 60);
    var minute = parseInt(time / 60);
    time = time % 60;
    return `${day}天${hour}小时${minute}分钟${time}秒`;

setInterval(function () {
    var count = document.getElementsByTagName("time")[0];
    count.textContent = getSub();
}, 1000);
