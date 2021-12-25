export function keyPress(toggleCounting) {
    window.addEventListener("keydown", (event) => {
        let key = event.which || event.keyCode;
        let elem = document.getElementById(String(key));
        // console.log(key);

        if (key === 32) {
            toggleCounting();
        }

        if (elem) {
            elem.style.background = "#271a57";
            setTimeout(() => {
                elem.style.background = "";
            }, 500);
        };
    })
}