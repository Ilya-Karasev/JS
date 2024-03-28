function toggle() {
    if (document.getElementById("extra").style.display == "block") {
        document.getElementById("extra").style.display = "none";
        document.querySelector(".button").textContent = "More";
    } else {
        document.getElementById("extra").style.display = "block";
        document.querySelector(".button").textContent = "Less";
    }
}