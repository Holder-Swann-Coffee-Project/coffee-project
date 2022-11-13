
let filterCoffees = [];
let roastSelect = document.getElementById("roast-selection");
let input = document.getElementById("searchCoffee");

let searchBtn = document.getElementById("search-btn");
let container = document.getElementById("coffee-list");

window.addEventListener("load",()=>{    
    if (localStorage.getItem("input") !== "" && localStorage.getItem("input") !== null ){
        input.value = localStorage.getItem("input");
        console.log("input.value: ",input.value);
    }
    // if (localStorage.getItem("saveCoffees") !== "" &&
    //  localStorage.getItem("saveCoffees") != null){

    //     filterCoffees = JSON.parse(localStorage.getItem("saveCoffees"));

    // }
    renderInContainer(input);
});


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

function matchedArray(typed) {
    filterCoffees = [];
    coffees.forEach((cup)=>{
        if (cup.roast.toLowerCase() == 
        roastSelect.value.toLowerCase()){
            filterCoffees.push(cup);
        }
    })

    
    console.log("Roast: ", roastSelect.value);
    
    if (roastSelect.value === "All"){

        coffees.forEach((drink) => {
            let name = drink.name.toUpperCase();
            let roast = drink.roast.toUpperCase();
            
            if (typed == null || typed == "") {
                filterCoffees = [];
            } else {
                
                if (name.includes(typed.toUpperCase()) ||
                roast.includes(typed.toUpperCase())) {
                    filterCoffees.push(drink);
                }
                
            }
            
        });
        
    }
   
    // localStorage.setItem("saveCoffees", JSON.stringify(filterCoffees));
    console.log("filterCoffees: ",filterCoffees);

    return filterCoffees;
}

function renderInContainer(input){
    container.innerHTML = renderCoffees(matchedArray(input.value));
    localStorage.setItem("input", input.value);
}

input.addEventListener("keyup",()=>{
    renderInContainer(input);
});
roastSelect.addEventListener("change", (event) => {
    container.innerHTML = renderCoffees(matchedArray(event.target.value));
})



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







