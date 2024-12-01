const express = require('express'); 
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3008;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files like CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://rashmimehta23cse:2Xibn6UBspihD0Tq@journeyjunctioncluster.tbedp.mongodb.net/journeyjunctioncluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes for different pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './htmls/finalHome.html')));
app.get('/destinations', (req, res) => res.sendFile(path.join(__dirname, './htmls/FinalDestinations.html')));
app.get('/Destination_detail', (req, res) => res.sendFile(path.join(__dirname, './htmls/goadestination.html')));
app.get('/Contact', (req, res) => res.sendFile(path.join(__dirname, './htmls/services.html')));
app.get('/DestinationJK', (req, res) => res.sendFile(path.join(__dirname, './htmls/FinalJK.html')));
app.get('/Finalshimla', (req, res) => res.sendFile(path.join(__dirname, './htmls/FinalShimla.html')));
app.get('/shimlades', (req, res) => res.sendFile(path.join(__dirname, './htmls/ukdesd.html')));
app.get('/index', (req, res) => res.sendFile(path.join(__dirname, './htmls/index2.html')));
app.get('/uk', (req, res) => res.sendFile(path.join(__dirname, './htmls/uttttt.html')));
app.get('/Ladakh', (req, res) => res.sendFile(path.join(__dirname, './htmls/ladakh.html')));
app.get('/Goa', (req, res) => res.sendFile(path.join(__dirname, './htmls/goadestination.html')));
app.get('/Kerala', (req, res) => res.sendFile(path.join(__dirname, './htmls/updateKerala.html')));

// API endpoint for reviews
const Review = mongoose.model('Review', new mongoose.Schema({
    bookingId: String,
    reviewTitle: String,
    reviewText: String,
    date: { type: Date, default: Date.now }
}));
const Review = mongoose.model('Review', reviewSchema);

app.post('/submitReview', async (req, res) => {
    const { bookingId, reviewTitle, reviewText } = req.body;

    if (!reviewText || !bookingId || !reviewTitle) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const newReview = new Review({ bookingId, reviewTitle, reviewText });

    try {
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit review', error: err });
    }
});


// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
