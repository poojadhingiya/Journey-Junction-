
const header = document.createElement("header");
header.className = "header";
const headerText = document.createElement("h1");
headerText.textContent = "Journey Juction";
header.appendChild(headerText) ;

const container = document.createElement("div");
container.className = "container";
const logo = document.createElement("div");
logo.className = "logo";
const logoLink = document.createElement("a");
logoLink.href = "#";
const logoImage = document.createElement("img");

logoLink.appendChild(logoImage);
logo.appendChild(logoLink);

const nav = document.createElement("nav");
nav.className = "navbar";
const navList = document.createElement("ul");
navList.className = "nav-list";
["Home", "Destinations", "Pages", "Contact"].forEach(text => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = text;
  li.appendChild(link);
  navList.appendChild(li);
});
nav.appendChild(navList);

const bookNow = document.createElement("div");
bookNow.className = "book-now";
const bookNowLink = document.createElement("a");
bookNowLink.href = "#";
bookNowLink.textContent = "Book Now";
bookNow.appendChild(bookNowLink);

container.append(logo, nav, bookNow);
header.appendChild(container);

// Banner
const banner = document.createElement("section");
banner.className = "banner";
const bannerText = document.createElement("h1");
bannerText.textContent = "Destination Details";
banner.appendChild(bannerText);

// Image gallery
const imageGallery = document.createElement("section");
imageGallery.className = "image-gallery";
const mainImage = document.createElement("div");
mainImage.className = "main-image";
const mainImg = document.createElement("img");
mainImg.src = "i1.jpg";
mainImg.alt = "Main Image";
mainImage.appendChild(mainImg);

const sideImages = document.createElement("div");
sideImages.className = "side-images";
["i2.jpg", "i3.jpg"].forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Side Image ${src}`;
  sideImages.appendChild(img);
});
imageGallery.append(mainImage, sideImages);

// Destination details
const destinationDetails = document.createElement("section");
destinationDetails.className = "destination-details";
const content = document.createElement("div");
content.className = "content";
const title = document.createElement("h2");
title.textContent = "Honouring History and Heritage in the Land of Heroes";
const description = document.createElement("p");
description.textContent = "Explore the historical richness of this destination...";
const features = document.createElement("h3");
features.textContent = "Features";
const featureList = document.createElement("ul");
["Free WiFi", "Breakfast Included", "Swimming Pool", "Parking Available"].forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  featureList.appendChild(li);
});
content.append(title, description, features, featureList);

const priceBox = document.createElement("div");
priceBox.className = "price-box";
const price = document.createElement("h2");
price.textContent = "Rs. 4320";
const perNight = document.createElement("p");
perNight.textContent = "per night";
const bookBtn = document.createElement("a");
bookBtn.href = "#";
bookBtn.className = "book-btn";
bookBtn.textContent = "Book Now";
priceBox.append(price, perNight, bookBtn);
destinationDetails.append(content, priceBox);

// Cities
const citySection = document.createElement("section");
citySection.className = "city-section";
const cityTitle = document.createElement("h2");
cityTitle.textContent = "The most searched for cities on Tourice";
const citiesGrid = document.createElement("div");
citiesGrid.className = "cities-grid";
[["i8.jpg", "City 1", "Rs. 3200/night"],
 ["i5.jpg", "City 2", "Rs. 4500/night"],
 ["i6.jpg", "City 3", "Rs. 3800/night"],
 ["i7.jpg", "City 4", "Rs. 2900/night"]]
 .forEach(([src, cityName, price]) => {
  const card = document.createElement("div");
  card.className = "city-card";
  const cityLink = document.createElement("a");
  cityLink.href = "#";
  const cityImg = document.createElement("img");
  cityImg.src = src;
  cityImg.alt = cityName;
  cityLink.appendChild(cityImg);
  const name = document.createElement("h3");
  name.textContent = cityName;
  const priceText = document.createElement("p");
  priceText.textContent = price;
  card.append(cityLink, name, priceText);
  citiesGrid.appendChild(card);
});
citySection.append(cityTitle, citiesGrid);

// Footer
const footer = document.createElement("footer");
footer.className = "footer";
const footerTitle = document.createElement("h2");
footerTitle.textContent = "Get our pro offers";
const footerText = document.createElement("p");
footerText.textContent = "Sign up to receive the best deals and discounts.";
footer.append(footerTitle, footerText);
document.body.append(header, banner, imageGallery, destinationDetails, citySection, footer);