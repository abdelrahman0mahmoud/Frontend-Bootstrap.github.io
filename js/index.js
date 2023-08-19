var alert_buttons = document.querySelectorAll(".copy-text-btn");
        
function code1() {
    alert("تم نسخ النص");
}

alert_buttons.forEach(function(button) {
    button.addEventListener("click", code1);
});