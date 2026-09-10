document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const navparent = document.querySelector("#navparent")

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
    navparent.classList.toggle("close");
	hamButton.classList.toggle("open");
});