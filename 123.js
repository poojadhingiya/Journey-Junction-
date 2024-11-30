
fetch('data.json')
  .then(response => response.json())
  .then(data => {
   
    const serviceContainer = document.querySelector('.service-cards');
    data.services.forEach(service => {
      const serviceCard = document.createElement('div');
      serviceCard.classList.add('service-card');
      serviceCard.innerHTML = `
        <img src="${service.image}" alt="${service.title}" width="300" height="200" />
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      serviceContainer.appendChild(serviceCard);
    });
    const backToTopButton = document.getElementById("back-to-top");
    
        window.onscroll = function() {
          if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        };
    
        backToTopButton.addEventListener("click", function() {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
  })
  .catch(error => console.error('Error loading JSON:', error));
