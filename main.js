
let saveRoast = localStorage.getItem("roast");
let saveInput = localStorage.getItem("input");

let roastSelect = document.getElementById("roast-selection");
let input = document.getElementById("searchCoffee");
input.value = saveInput;
roastSelect.value = saveRoast; 

let searchBtn = document.getElementById("search-btn");
let container = document.getElementById("coffee-list");

window.addEventListener("load", () => { 
   renderInContainer(saveInput,saveRoast)
});
input.addEventListener("keyup", () => {
    renderInContainer(input.value, roastSelect.value);
    localStorage.setItem("input", input.value);
});
roastSelect.addEventListener("change", (event) => {
    container.innerHTML = renderCoffees(matchedArray(input.value, roastSelect.value));
    localStorage.setItem("roast", roastSelect.value);
})



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    { id: 1, name: 'Light City', roast: 'light', image: "assets/nathan-dumlao-zUNs99PGDg0-unsplash.jpeg" },
    { id: 2, name: 'Half City', roast: 'light', image: "" },
    { id: 3, name: 'Cinnamon', roast: 'light', image: "" },
    { id: 4, name: 'City', roast: 'medium', image: "" },
    { id: 5, name: 'American', roast: 'medium', image: "" },
    { id: 6, name: 'Breakfast', roast: 'medium', image: "" },
    { id: 7, name: 'High', roast: 'dark', image: "" },
    { id: 8, name: 'Continental', roast: 'dark', image: "" },
    { id: 9, name: 'New Orleans', roast: 'dark', image: "" },
    { id: 10, name: 'European', roast: 'dark', image: "" },
    { id: 11, name: 'Espresso', roast: 'dark', image: "" },
    { id: 12, name: 'Viennese', roast: 'dark', image: "" },
    { id: 13, name: 'Italian', roast: 'dark', image: "" },
    { id: 14, name: 'French', roast: 'dark', image: "" },
];

function matchedArray(typed, roast) {
    let filterCoffees = [];


    switch (roast) {
        case "Light":
            filterCoffees = coffees.filter(coffee => {
                return coffee.roast.toLowerCase() == roast.toLowerCase();
            });
            console.log('Light arr', filterCoffees);

            break;
        case "Medium":
            filterCoffees = coffees.filter(coffee => {
                return coffee.roast.toLowerCase() == roast.toLowerCase();
            });
            console.log('Medium arr', filterCoffees);

            break;
        case "Dark":
            filterCoffees = coffees.filter(coffee => {
                return coffee.roast.toLowerCase() == roast.toLowerCase();
            });
            console.log('Dark arr', filterCoffees);

            break;
        default:
            filterCoffees = coffees;
            console.log("All arr", filterCoffees);
    }


    if (typed != null && typed != "") {

        let newArr = filterCoffees.filter(coffee => {

            let name = coffee.name.toUpperCase();
            let rst = coffee.roast.toUpperCase();
            typed = typed.toUpperCase();

            return name.includes(typed) || rst.includes(typed);

        });
        return newArr;
    }





    // localStorage.setItem("filterCoffees",JSON.stringify(filterCoffees))
    return filterCoffees;
}

function renderInContainer(input, roast) {
    container.innerHTML = renderCoffees(matchedArray(input, roast));
}




function renderCoffee(coffee) {
    var html = `<div class="coffee-cont">`;
    // html += `<td> + coffee.id + </td>`;
    html += `<figure class="img-cont" style="
    width: 300px;
    height:300px;
    background-image: url(${coffee.image});
    background-size: cover;
    background-repeat: no-repeat;
    " ></figure>`;
    html += `<p class="coffee-name">${coffee.name}</p>`;
    html += `<p class="roast">${coffee.roast}</p>`;
    html += `</div>`;



    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}







