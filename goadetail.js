// Sample JSON data structure
const data = {
    destinationDetails: {
        title: "Honouring History and Heritage in the Land of Heroes",
        description: "Explore the historical richness of this destination...",
        features: ["Free WiFi", "Breakfast Included", "Swimming Pool", "Parking Available"],
        price: 4320
    },
    cities: [
        { name: "La Grace Resort", price: 3200, image: "https://www.travelandleisure.com/thmb/i2VQjsawIAgJo_OQ7jVuni6SJOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crillon-le-brave-080-TOPHOTELSWB21-1bf002aa2f8f48d285d038a497da9279.jpg" },
        { name: "The Hawaii Comforts", price: 4500, image: "https://assets.minorhotels.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/mhg/images/rebrand/homepage/carousel/anantara1.jpg" },
        { name: "Resort Ritchita", price: 3800, image: "https://x3jh6o6w.cdn.imgeng.in/assets/uploads/hotels/hotel-inghilterra/pop-up-hir.jpg?imgeng=/w_800" },
        { name: "Blu Resort", price: 2900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL41P2EPh32G0bciHXtrdW9dgauJuxEXr9jQ&s" }
    ]
};

// Function to render destination details
function renderDestinationDetails() {
    document.querySelector(".destination-details .content h2").textContent = data.destinationDetails.title;
    document.querySelector(".destination-details .content p").textContent = data.destinationDetails.description;
    
    const featuresList = document.querySelector(".destination-details .content ul");
    featuresList.innerHTML = ""; // Clear existing list items
    data.destinationDetails.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    document.querySelector(".price-box h2").textContent = `Rs. ${data.destinationDetails.price}`;
}

// Function to render city cards
function renderCities() {
    const citiesGrid = document.querySelector(".cities-grid");
    citiesGrid.innerHTML = ""; // Clear existing city cards
    data.cities.forEach(city => {
        const cityCard = document.createElement("div");
        cityCard.className = "city-card";
        
        cityCard.innerHTML = `
            <a href="#"><img src="${city.image}" alt="${city.name}"></a>
            <h3>${city.name}</h3>
            <p>Rs. ${city.price}/night</p>
        `;
        
        citiesGrid.appendChild(cityCard);
    });
}

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
    renderDestinationDetails();
    renderCities();
});
