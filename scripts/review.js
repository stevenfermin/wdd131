const countVisits = document.getElementById("count");

// 2️⃣ Get the stored VALUE for the Visits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let Visits = Number(window.localStorage.getItem("Visits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (Visits === 0) {
	countVisits.innerHTML = `This is your first visit. 🥳 Welcome!`;
} else {
	countVisits.textContent = Visits;
}

// 4️⃣ increment the number of visits by one.
Visits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("Visits-ls", Visits);