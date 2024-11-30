// Sample JSON data structure
const data = {
    destinationDetails: {
        title: "Honouring History and Heritage in the Land of Heroes",
        description: "Explore the historical richness of this destination...",
        features: ["Free WiFi", "Breakfast Included", "Swimming Pool", "Parking Available"],
        price: 4320
    },
    cities: [
        { name: "Hotel Cochin Legacy", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QeaNtfjdwTCRwmYHPNowhTk_HHjiPrZfzQ&s" },
        { name: "Hotel Icon Classic", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI0Bxy3kOvyUtXeLC3OxcL6hEeje_QQULrQ&s" },
        { name: "The Hotel Elegance", price: 3800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-0qSH8UXdm7SLQW3YWSCk1KJquyKRhFZ5A&s" },
        { name: "Vedic Village Resort", price: 2900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjuiNJqOnDp9EY3GphqALyHuIu9c9Cp63aQ&s" }
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