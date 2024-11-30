
document.head.innerHTML += `
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    body { 
            margin: 0; 
            font-family: 'Roboto', sans-serif; 
            background-color: #f0f0f0; }
    .header, .footer { background-color: #1a1a1a; color: white; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; }
    .logo h1 
    { margin-left: 10px; font-size: 1.5em; }
    .hero 
    { position: relative; color: white; text-align: center; }
    .hero img
     { width: 100%; height: 800px; }
    .hero .overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center; }
    .hero button, .section .content .card button, .oval-section .button { background-color: #ffcc00; border: none; padding: 10px 20px; font-size: 1em; cursor: pointer; }
    .section, .services, .oval-section { padding: 40px 20px; }
    .section .content .card, .services .service-cards .service-card { background-color: #333; color: white; width: 20%; margin: 10px; padding: 20px; text-align: center; }
    .services .service-cards .service-card img, .section .content .card img, .oval-section .ovals .oval img { width: 100%; height: 300px; }
    .footer a { color: #ffcc00; text-decoration: none; margin: 0 10px; }
    .footer .social-icons i { margin: 0 10px; cursor: pointer; }
  </style>
`;

// Header
document.body.innerHTML += `
  <div class="header">
    <div class="logo">
      <img src="https://i.pinimg.com/236x/ab/0b/09/ab0b09c792b00a849ab5b0af5159d4b2.jpg" width="50" alt="Journey Junction Logo"/>
      <h1>Journey Junction</h1>
    </div>
    <nav>
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#SERVICES">Services</a>
      <a href="#Contact">Contact</a>
    </nav>
  </div>
`;

// Hero section
document.body.innerHTML += `
  <div class="hero">
    <img src="https://i.pinimg.com/564x/19/a6/21/19a6212d923a4ed886ae14fffa361574.jpg" alt="Beach with palm trees at sunset"/>
    <div class="overlay">
      <h1>Plan Your Perfect Getaway</h1>
      <a href="#Explore"><button>Explore Now</button></a>
    </div>
  </div>
`;

// About section
document.body.innerHTML += `
  <div id="About" class="container">
    <div class="image-section">
      <img src="https://i.pinimg.com/236x/02/3a/fd/023afd17b4436f3f4b23bfac04d2b467.jpg" alt="Travel Image"/>
    </div>
    <div class="text-section">
      <h1>About</h1>
      <h2>Experience the World With Us!!</h2>
      <h3>The world is a book and those who do not travel read only one page.</h3>
      <div class="underline"></div>
      <p>Welcome to our travel guidance platform, where we curate the best destinations and must-see spots for your next journey. Whether it's suggesting top places to visit or cozy night stays, we are your ultimate trip companion.</p>
    </div>
  </div>
`;

// Card section
document.body.innerHTML += `
  <div class="section">
    <h2>Experience The World With Us</h2>
    <div class="content">
      ${["Adventure Awaits", "Relax and Unwind", "Urban Exploration"].map((title, i) => `
        <div class="card">
          <img src="${[
            'https://i.pinimg.com/236x/2c/c3/50/2cc350a95c808f03a591c96acdd49dcb.jpg',
            'https://i.pinimg.com/564x/60/32/b0/6032b00ed155bf2d8bb2f3e8113ebe67.jpg',
            'https://i.pinimg.com/236x/6d/29/c0/6d29c00a8eb5eacbc1b0aa3b2ed98b89.jpg'
          ][i]}" alt="${title}"/>
          <h3>${title}</h3>
          <button>Learn More</button>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Oval section
document.body.innerHTML += `
  <div id="Explore" class="oval-section">
    <h2>Search the Best Places in India</h2>
    <button class="button">Explore All</button>
    <div class="ovals">
      ${["Taj Mahal", "Kerala backwaters", "Goa beach", "Himalayan mountains", "Rajasthan desert"].map((alt, i) => `
        <div class="oval">
          <img src="${[
            'https://i.pinimg.com/236x/23/7e/48/237e483332715f8e2225fd8a5ef7a08e.jpg',
            'https://i.pinimg.com/474x/08/1e/90/081e90489bb5173017c982b4f4d2643d.jpg',
            'https://i.pinimg.com/236x/f8/62/78/f86278093e826eff06eb8c7a5a28f94b.jpg',
            'https://i.pinimg.com/236x/65/71/46/657146dc294a3c1e0abdbd72d89351d2.jpg'
          ][i]}" alt="${alt}"/>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Services section
document.body.innerHTML += `
  <div id="SERVICES" class="services">
    <h2>SERVICES</h2>
    <div class="service-cards">
      ${["Travel Planning", "Accommodation Booking", "Tour Packages"].map((service, i) => `
        <div class="service-card">
          <img src="${[
            'https://i.pinimg.com/564x/f5/79/e4/f579e44e49ccc0c733b91c39df33b87f.jpg',
            'https://i.pinimg.com/474x/6d/0e/3a/6d0e3ac0335111f16761088900ba5849.jpg',
            'https://i.pinimg.com/236x/5f/fd/72/5ffd7275d3f37e4762120bf288af823b.jpg'
          ][i]}" alt="${service}"/>
          <h3>${service}</h3>
          <p>Customized services for your needs</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

// Footer
document.body.innerHTML += `
  <footer class="footer">
    <div class="social-icons">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-linkedin-in"></i>
    </div>
    <p>© 2023 Journey Junction. All rights reserved.</p>
    <div class="footer-content">
      <p>Email: <a href="mailto:mehtanrashmi26@gmail.com">mehtanrashmi26@gmail.com</a></p>
      <p>Address: Gurgaon, Haryana, India</p>
      <p>Contact: +91-7302122874</p>
      <p>Hours: Mon-Sun 24/7</p>
    </div>
  </footer>
`;
