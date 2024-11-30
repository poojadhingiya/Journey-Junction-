

let currentIndex = 0;

// Function to display the current item
function showItem() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerText = items[currentIndex];
}

// Function for the 'Next' button
function nextItem() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        showItem();
    }
}

// Function for the 'Previous' button
function previousItem() {
    if (currentIndex > 0) {
        currentIndex--;
        showItem();
    }
}

// Display the first item on page load
showItem();
