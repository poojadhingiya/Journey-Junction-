// Sample JSON data structure
const data = {
    destinationDetails: {
        title: "Honouring History and Heritage in the Land of Heroes",
        description: "Explore the historical richness of this destination...",
        features: ["Free WiFi", "Breakfast Included", "Swimming Pool", "Parking Available"],
        price: 4320
    },
    cities: [
        { name: "Ivy Cottage", price: 3200, image: "https://lh3.googleusercontent.com/proxy/MJADo_iwhxDMRtCgC2ACQ2l6Xkzl2xaXxxdiQX-4JDioOBHZByxwv9oou_7ESBhnnBIxdKatk6P4PHhduwxWI6xoySEHPCd77NvEDNUeDCbyXjH7YJB1hr6jsL57TsbRRwqPbOYq_A6SJOvzA6QBHfuSfsXOPso=w472-h352-n-k" },
        { name: "Taj Corbett", price: 4500, image: "https://lh3.googleusercontent.com/proxy/IJF8JS3u8qMrYeFTk9GvE7knPTUuzLSS3mL4pzFgQvp8eu9Js0iYMPCfoAgu-07PQElJBsRqixfxnSBnZ2i1_FhZAZNc49FhFsfPuTJMybKq67oC1Ir_J4uBVfTyMdS5G7QJKpPGNR-Ry6PbzzDoiMdTNJJypw=w472-h352-n-k" },
        { name: "Naini Retreat", price: 3800, image: "https://lh3.googleusercontent.com/proxy/DAN1b_gZ_58inX1TyewH-lpanHiqFhNKEKfXH12_tKugQcoCCqDF92QQkFWSMWG3RanDJWLZdgsXkNl-CVb8jZo5wWYsMmBK0Jtky77_2uJIakDZr6PE7sIRaj3GoHNfUe_2RhvmjNPmZXVIc1JH_1hEACei6w=w472-h352-n-k" },
        { name: "Namah Resort", price: 2900, image: "https://lh3.googleusercontent.com/proxy/Sle8OuByVwqbHbEqt5JmQg8ba2hTbUG0ecRdWPsMrX4WA7QKq5nw4p8xHXay3PkuCtUjRQWwOfMZabGwhq-HFb_Dh8aG5ZwJCjdW-DrHq-MEJgnMG2N3Vsd_LGGbxrPV5jM9YL8SBU5KIi8K6qeuieEjkde5oyQ=w472-h352-n-k" }
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