var btnShow = document.getElementById('kyl').addEventListener('click',showBox);
var btnHide = document.getElementById('ei').addEventListener('click',hideBox);

function showBox() {

    document.getElementById('needs').style.display="block";
}
function hideBox() {
    document.getElementById('needs').style.display="none";
}