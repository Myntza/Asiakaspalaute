var btnShow = document.getElementById('yes').addEventListener('click',showBox);
var btnHide = document.getElementById('no').addEventListener('click',hideBox);


/* Added true/false to prevent both selected. */

function showBox() {
    no.checked = false;
    yes.checked = true;
    document.getElementById('needs').style.display="block";
}
function hideBox() {
    no.checked = true;
    yes.checked = false;
    document.getElementById('needs').style.display="none";
}