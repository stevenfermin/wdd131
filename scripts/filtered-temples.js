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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango, Guatemala",
    dedicated: "2011, November, 11",
    area: 21085,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
  },
  {
    templeName: "Guatemala City Guatemala",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 46",
    area: 11610,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-68580-main.jpg"
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
];


createTempleCard(temples)

const oldTemples = document.querySelector("#old");

oldTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900))
	/*const myTemple = temples.filter(temple => temple.dedicated.split(","));
	const year = myTemple[0];
	const older = temples.filter(temple => temple.dedicated.split(",")[0] < 1900)
	createTempleCard(older)
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900))*/
});

const newTemples = document.querySelector("#new");

newTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] > 2000))
	/*createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000))*/
});

const largeTemples = document.querySelector("#large");

largeTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area >= 90000))
});

const smallTemples = document.querySelector("#small");

smallTemples.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000))
});

const allTemples = document.querySelector("#home");

allTemples.addEventListener("click", () => {
	createTempleCard(temples)
});

function createTempleCard(filteredTemples) {
	document.querySelector("#container").innerHTML = "";
	filteredTemples.forEach((temple) => {
		let card = document.createElement("section");
		card.className = "card"
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicate = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");
		/*image.src = temple.imageUrl;
		image.alt = temple.templeName;
		image.loading = "lazy";
		document.getElementById("container").append(image);*/

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedicate.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq feet`;
		image.src = temple.imageUrl;
		/*image.setAttribute("src", temple.imageUrl);*/
		image.alt = `${temple.templeName} Temple`;
		/*image.setAttribute("alt", `${temple.templeName} Temple`);*/
		image.loading = "lazy";
		/*image.setAttribute("loading", "lazy");*/

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicate);
		card.appendChild(area);
		card.appendChild(image);

		document.querySelector("#container").append(card);
	});
}

let footer = document.getElementById("footer");
const p = document.createElement("p")
p.innerHTML = `&copy;🌄Cesar Steven Fermin🌄 Dominican Republic`
footer.appendChild(p);