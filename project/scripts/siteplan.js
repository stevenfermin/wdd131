const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation2");
const sectparent = document.querySelector("#org")

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
    sectparent.classList.toggle("close");
	hamButton.classList.toggle("open");
});

const countVisits = document.getElementById("welcome");
let mssg = document.createElement("p");
mssg.className = "visits";
let numberVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numberVisits === 0) {
	countVisits.innerHTML = `This is your first visit. 🥳 Welcome!`;
} else {
	countVisits.innerHTML = `Welcome again!`;
    mssg.innerHTML =  `Thanks for comming ${numberVisits} times!`;
    document.getElementById("welcome").appendChild(mssg);
}

numberVisits++;

localStorage.setItem("visits-ls", numberVisits);

const Cars = [
    {
        brand: "Ford",
        model: "Mustang GT",
        type: "Coupe",
        year: 2018,
        engine: "V8 5.0L",
        seats: 4,
        price: 45000,
        imageUrl: "images/ford-mustang-750px.webp",
    },
    {
        brand: "Hyundai",
        model: "Palisade",
        type: "SUV",
        year: 2018,
        engine: "V6 3.5L",
        seats: 8,
        price: 40000,
        imageUrl: "images/hyundai-palisade-750px.webp",
    },
    {
        brand: "Ford",
        model: "F-150 Raptor",
        type: "Truck",
        year: 2010,
        engine: "V8 5.4L",
        seats: 5,
        price: 20000,
        imageUrl: "images/ford-f150-750px.webp",
    },
    {
        brand: "Kawasaki",
        model: "Ninja H2R",
        type: "Motorbike",
        year: 2015,
        engine: "4 Cilinders",
        seats: 1,
        price: 62100,
        imageUrl: "images/yamaha-h2r-750px.webp"
    },
    {
        brand: "Mercedez-Benz",
        model: "Sprinter",
        type: "Van",
        year: 2026,
        engine: "2.0L biturbo 4 cilinders",
        seats: 21,
        price: 98000,
        imageUrl: "images/mercedez-sprinter-750px.webp"
    },
    {
        brand: "BMW",
        model: "M4 Competition",
        type: "Coupe",
        year: 2025,
        engine: "3.0L biturbo 6 cilinders",
        seats: 4,
        price: 83000,
        imageUrl: "images/bmw-m4-750px.webp"
    },
    {
        brand: "Toyota",
        model: "Tacoma",
        type: "Truck",
        year: 2020,
        engine: "3.5L V6",
        seats: 5,
        price: 23000,
        imageUrl: "images/toyota-tacoma-750px.webp"
    },
    {
        brand: "Honda",
        model: "Civic Type-R",
        type: "Sedan",
        year: 2020,
        engine: "2.0L VTEC Turbo 4 cilinders",
        seats: 5,
        price: 44500,
        imageUrl: "images/honda-civic-750px.webp"
    },
    {
        brand: "Hyundai",
        model: "Elantra",
        type: "Sedan",
        year: 2020,
        engine: "2.0L 4 cilinders",
        seats: 5,
        price: 18000,
        imageUrl: "images/hyundai-elantra-750px.webp"
    },
    {
        brand: "Toyota",
        model: "Rav4 Limited Hybrid",
        type: "SUV",
        year: 2020,
        engine: "2.5L 4 cilinders",
        seats: 5,
        price: 36800,
        imageUrl: "images/toyota-rav4-750px.webp"
    }
    
]

createCarCard(Cars)

const sedan = document.querySelector("#sedan");

sedan.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "Sedan"))
	
});

const truck = document.querySelector("#truck");

truck.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "Truck"))
	
});

const suv = document.querySelector("#suv");

suv.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "SUV"))
	
});

const coupe = document.querySelector("#coupe");

coupe.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "Coupe"))
	
});

const motorbike = document.querySelector("#motorbike");

motorbike.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "Motorbike"))
	
});

const van = document.querySelector("#van");

van.addEventListener("click", () => {
	createCarCard(Cars.filter(car => car.type == "Van"))
});

const allCars = document.querySelector("#all");

allCars.addEventListener("click", () => {
	createCarCard(Cars)
});

function createCarCard(filteredCars){
    document.querySelector("#container").innerHTML = "";
	filteredCars.forEach((car) => {
		let card = document.createElement("section");
		card.className = "card";
        let image = document.createElement("img");
        let brand = document.createElement("h2");
        let model = document.createElement("h2");
        let year = document.createElement("h2");
        let engine = document.createElement("h2");
        let seats = document.createElement("h2");
        let price = document.createElement("h2");

        image.src = car.imageUrl;
        image.alt = `${car.brand} ${car.model}`;
        image.loading = 'lazy';
        brand.innerHTML = `<span class="label">Brand:</span> ${car.brand}`;
        model.innerHTML = `<span class="label">Model:</span> ${car.model}`;
        year.innerHTML = `<span class="label">Year:</span> ${car.year}`;
        engine.innerHTML = `<span class="label">Engine:</span> ${car.engine}`;
        seats.innerHTML = `<span class="label">Seats:</span> ${car.seats}`;
        price.innerHTML = `<span class="label">Price:</span> <span class="value">USD$ ${car.price}</span>`;

        card.appendChild(image);
        card.appendChild(brand);
        card.appendChild(model);
        card.appendChild(year);
        card.appendChild(engine);
        card.appendChild(seats);
        card.appendChild(price);

        document.querySelector("#container").append(card);

    });
}

let footer = document.getElementById("footer");
const p = document.createElement("p")
p.innerHTML = `&copy;🌄Cesar Steven Fermin🌄 Dominican Republic`
footer.appendChild(p);