window.onscroll = relocate;
window.onresize = relocate;

function relocate() {
    var mydiv = document.getElementById("myDiv");
    var height = Math.abs(document.body.clientHeight + document.body.scrollTop - 80);
    window.status = document.body.clientHeight + " " + document.body.scrollTop;
    mydiv.style.top = height;
}