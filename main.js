
(function(){
"use strict";

    let saveRoast = localStorage.getItem("roast");
    let saveInput = localStorage.getItem("input");
    
    let userCoffee = localStorage.getItem("userCoffee");
    let userRoast = localStorage.getItem("userRoast");
    
    
    
    
    let roastSelect = document.getElementById("roast-selection");
    let input = document.getElementById("searchCoffee");
    input.value = saveInput;
    roastSelect.value = saveRoast;
    
    let searchBtn = document.getElementById("search-btn");
    let container = document.getElementById("coffee-list");
    
    window.addEventListener("load", () => {
        renderInContainer(saveInput, saveRoast)
    });
    input.addEventListener("keyup", () => {
        renderInContainer(input.value, roastSelect.value);
        localStorage.setItem("input", input.value);
    });
    roastSelect.addEventListener("change", (event) => {
        container.innerHTML = renderCoffees(matchedArray(input.value, roastSelect.value));
        localStorage.setItem("roast", roastSelect.value);
    })
    
    function renderInContainer(input, roast) {
        container.innerHTML = renderCoffees(matchedArray(input, roast));
    }
    
    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]);
        }
        return html;
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
    
    
    // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        { id: 1, name: 'Light City', roast: 'light', image: "assets/wu-yi-mk7zhx5lFbc-unsplash-removebg-preview.png" },
        { id: 2, name: 'Half City', roast: 'light', image:"assets/kanwardeep-kaur-HjfkPgfg0XY-unsplash-removebg-preview.png" },
        { id: 3, name: 'Cinnamon', roast: 'light', image: "assets/jason-wong-kSlL887znkE-unsplash-removebg-preview.png" },
        { id: 4, name: 'City', roast: 'medium', image: "assets/nolan-issac-It0DCaCBr40-unsplash-removebg-preview.png" },
        { id: 5, name: 'American', roast: 'medium', image: "assets/kanwardeep-kaur-HjfkPgfg0XY-unsplash-removebg-preview.png" },
        { id: 6, name: 'Breakfast', roast: 'medium', image: "assets/nathan-dumlao-6VhPY27jdps-unsplash-removebg-preview.png" },
        { id: 7, name: 'High', roast: 'dark', image: "assets/jason-wong-kSlL887znkE-unsplash-removebg-preview.png" },
        { id: 8, name: 'Continental', roast: 'dark', image: "assets/nolan-issac-It0DCaCBr40-unsplash-removebg-preview.png" },
        { id: 9, name: 'New Orleans', roast: 'dark', image: "assets/nathan-dumlao-6VhPY27jdps-unsplash-removebg-preview.png" },
        { id: 10, name: 'European', roast: 'dark', image: "assets/pexels-thought-catalog-904616-removebg-preview.png" },
        { id: 11, name: 'Espresso', roast: 'dark', image: "assets/wu-yi-mk7zhx5lFbc-unsplash-removebg-preview.png" },
        { id: 12, name: 'Viennese', roast: 'dark', image: "assets/wu-yi-mk7zhx5lFbc-unsplash-removebg-preview.png" },
        { id: 13, name: 'Italian', roast: 'dark', image: "assets/wu-yi-mk7zhx5lFbc-unsplash-removebg-preview.png" },
        { id: 14, name: 'French', roast: 'dark', image: "assets/wu-yi-mk7zhx5lFbc-unsplash-removebg-preview.png" },
    ];
        if (userCoffee !== null && userRoast !== null){
            coffees = JSON.parse(localStorage.getItem("newCoffees"));
            console.log("lc: ",localStorage.getItem("newCoffees"));
            console.log('json arr', JSON.parse(localStorage.getItem("newCoffees")));
            
            
        }
    
    
    
        function createCoffee(c , r){
    
            if (r != "" && c != ""){
                coffees.push({
                    id: coffees[coffees.length-1].id++,
                    name: c,
                    roast: r,
                    image: "assets/jason-wong-kSlL887znkE-unsplash-removebg-preview.png"
                });
            }
            
            localStorage.setItem("newCoffees",JSON.stringify(coffees));
            alert("Coffee added");
            location.reload();
        }
        
    
    function matchedArray(typed, roast) {
        let filterCoffees = [];
        let count = document.getElementById("search-results");
    
        switch (roast) {
            case "Light":
                filterCoffees = coffees.filter(coffee => {
                    return coffee.roast.toLowerCase() == roast.toLowerCase();
                });
    
                break;
            case "Medium":
                filterCoffees = coffees.filter(coffee => {
                    return coffee.roast.toLowerCase() == roast.toLowerCase();
                });
    
                break;
            case "Dark":
                filterCoffees = coffees.filter(coffee => {
                    return coffee.roast.toLowerCase() == roast.toLowerCase();
                });
    
                break;
            default:
                filterCoffees = coffees;
        }
    
    
        if (typed != null && typed != "") {
    
            let newArr = filterCoffees.filter(coffee => {
    
                let name = coffee.name.toUpperCase();
                let rst = coffee.roast.toUpperCase();
                typed = typed.toUpperCase();
    
                
                return name.includes(typed) || rst.includes(typed);
    
            });
            count.innerHTML = `${newArr.length} Search Results`;
            return newArr;
        }
        
        count.innerHTML = `${filterCoffees.length} Search Results`;
        return filterCoffees;
    }
    
    let form = document.getElementById("addItems");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        localStorage.setItem("userRoast", event.target[0].value);
        localStorage.setItem("userCoffee", event.target[1].value);
    
        createCoffee( event.target[1].value, event.target[0].value);
    })
    
    

})();


