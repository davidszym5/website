// DOM Elements
let homeTab = null;
let aboutTab = null;
let resumeTab = null;
let portfolioTab = null;
let contactTab = null;

window.onload = function() {
    homeTab = document.getElementById("home");
    aboutTab = document.getElementById("about");
    resumeTab = document.getElementById("resume");
    portfolioTab = document.getElementById("portfolio");
    contactTab = document.getElementById("contact");

    homeTab.addEventListener("click", changeTab);
    aboutTab.addEventListener("click", changeTab);
    resumeTab.addEventListener("click", changeTab);
    portfolioTab.addEventListener("click", changeTab);
    contactTab.addEventListener("click", changeTab);
}

function changeTab(event) {
    let activeTab = document.getElementsByClassName("active")[0];
    let oldTabDiv = activeTab.id + "-tab";
    let newTab = event.target;
    let newTabDiv = newTab.id + "-tab";

    activeTab.classList.remove("active");
    activeTab.classList.remove("sel")
    newTab.classList.add("active");
    newTab.classList.add("sel");

    console.log("oldTabDiv: " + oldTabDiv);
    console.log(document.getElementById(oldTabDiv));
    document.getElementById(oldTabDiv).classList.add("hide-tab");
    document.getElementById(newTabDiv).classList.remove("hide-tab");

}
