document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach((product) => {
    let option = document.createElement("option");
    let select =  document.getElementById("productList");

    option.text = product.name;
    option.value = product.name;
    option.id = product.name;
    select.add(option);
});

// 1️⃣ Initialize display element variable


// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
