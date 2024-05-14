const menuEl = document.querySelector(".bi-list");
const sidEl = document.querySelector(".sidebar");
const closeEl = document.querySelector(".bi-x");
menuEl.addEventListener("click", () => {
    sidEl.style.marginLeft = "-133px"
    sidEl.style.transition = ".5s"
    menuEl.style.display = "none"
})

closeEl.addEventListener("click", () => {
    sidEl.style.marginLeft = "-50%"
    sidEl.style.transition = ".5s"
    menuEl.style.display = "block"
})
function darkmode() {
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode");
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        console.log("Dark mode");
        theme = "DARK"
    }
    else {
        console.log("Light mode");
        theme = "LIGHT"
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);
if (GetTheme === "DARK") {
    document.body.classList = "dark-mode"
}