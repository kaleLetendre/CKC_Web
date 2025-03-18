const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { 
        title: "Home - CKC",
        heroTitle: "Custom Software Solutions for Your Business",
        heroSubtitle: "Scalable, high-performance applications tailored to your needs.",
        heroImage: "/images/matt-wang-dBp9dbQCh4Q-unsplash.jpg",
        heroButtons: [
            { text: "Explore Services", link: "/services" },
            { text: "Get a Free Consultation", link: "/contact" }
        ],
        ctaTitle: "Transform Your Business with CKC",
        ctaSubtitle: "Our expert team is ready to build the perfect software solution for you."
    });
});


router.get('/services', (req, res) => {
    res.render('services', { 
        title: "Our Services - CKC",
        heroTitle: "Professional Web & Software Solutions",
        heroSubtitle: "We create scalable websites and full-fledged digital platforms.",
        heroImage: "/images/beautiful-shot-boats-parked-near-coal-harbour-vancouver.jpg",
        heroButtons: [],
        ctaTitle: "Discover Our Expertise",
        ctaSubtitle: "We offer cutting-edge technology solutions tailored to your business."
    });
});

router.get('/about', (req, res) => {
    res.render('about', { 
        title: "About Us - CKC", 
        heroTitle: "Empowering Businesses with Technology",
        heroSubtitle: "We provide innovative software solutions tailored for growth and success.",
        heroImage: "/images/vancouver-city-skyline-waterfront-with-bench-park.jpg",
        heroButtons: [],
        ctaTitle: "Join Our Journey",
        ctaSubtitle: "Learn more about CKC and our mission to innovate."
    });
});

router.get('/contact', (req, res) => {
    const email = "contact@email.com";
    res.render('contact', { 
        title: "Contact Us - CKC", 
        heroTitle: "Let's Connect",
        heroSubtitle: "We’re here to answer any questions and discuss your project needs.",
        heroImage: "/images/vancouver-harbor-view-with-urban-apartment-buildings-bay-boat-canada.jpg",
        email: email,
        heroButtons: [
            { text: "Email Us", link: `mailto:${email}` }
        ],
        ctaTitle: "",
        ctaSubtitle: ""
    });
});


module.exports = router;
