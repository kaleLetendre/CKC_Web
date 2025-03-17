const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About Route (Make sure this exists)
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Services Route
router.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services' });
});

// Contact Route
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
