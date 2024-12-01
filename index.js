const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const router= express.Router();


const app = express();
const port = 3008;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files like CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://rashmimehta23cse:2Xibn6UBspihD0Tq@journeyjunctioncluster.tbedp.mongodb.net/?retryWrites=true&w=majority&appName=journeyjunctioncluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

// Define the Review schema
const reviewSchema = new mongoose.Schema({
    bookingId: String,
    reviewTitle: String,
    reviewText: String,
    date: { type: Date, default: Date.now }
});

// Create a Review model
const Review = mongoose.model('Review', reviewSchema);

// POST endpoint to submit a review
app.post('/submitReview', async (req, res) => {
    const { bookingId, reviewTitle, reviewText } = req.body;

    const newReview = new Review({
        bookingId,
        reviewTitle,
        reviewText
    });

    try {
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit review', error: err });
    }
});

// Define routes for different pages

// Homepage route (finalHome.html)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './htmls/finalHome.html'));
});

// Other routes for different pages
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));  // Make sure 'about.html' exists
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));  // Make sure 'contact.html' exists
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));  // Make sure 'services.html' exists
});

app.get('/destinations', (req, res) => {
    res.sendFile(path.join(__dirname, './htmls/FinalDestinations.html'));  // Make sure 'destinations.html' exists
});
app.get('/Destination_detail', (req, res) => {
    res.sendFile(path.join(__dirname, './htmls/goadestination.html'));  // Make sure 'destinations.html' exists
});
app.get('/finalHome', (req, res) => {
    res.sendFile(path.join(__dirname, './htmls/finalHome.html'));  // Make sure 'destinations.html' exists
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
