const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/collegeReviews", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import Review model
const Review = require("./models/Review");

app.use(cors({
    origin: 'http://localhost:5175', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// API Routes
// Add a new review
app.post("/reviews", async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).send(review);
    } catch (err) {
        res.status(500).send({ error: "Failed to save review" });
    }
});

// Get all reviews
app.get("/reviews", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).send(reviews);
    } catch (err) {
        res.status(500).send({ error: "Failed to fetch reviews" });
    }
});

app.get("/reviews/:collegeName", async (req, res) => {
    try {
        const { collegeName } = req.params;
        const reviews = await Review.find({ collegeName });
        res.json(reviews);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Endpoint to send contact form email
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send("All fields are required");
    }

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            // host: process.env.SMTP_HOST,
            // port: process.env.SMTP_PORT,
            // secure: false,
            service: "gmail", // Change if using a different email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
            logger: true,
            debug: true,
        });
        
        transporter.verify((error, success) => {
            if (error) {
              console.error("Transporter configuration error:", error);
            } else {
              console.log("Transporter is ready to send emails.");
            }
          });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER, // Your email address
            to: process.env.EMAIL_RECEIVER, // Where the email should be sent
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).send("Message sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending message");
    }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
