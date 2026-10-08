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
        price.innerHTML = `<span class="label">Price:</span> <span class="value">${car.price}</span>`;

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