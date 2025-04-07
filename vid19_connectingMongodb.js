const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Updated Schema with password
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('User', userSchema);

// Home route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create user using create() + logging
app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const result = await User.create({ name, email, password });
        console.log("✅ result:", result);
        res.status(201).json({
            message: "User created successfully",
            data: result
        });
    } catch (err) {
        console.error("❌ Error:", err.message);
        res.status(400).json({ error: err.message });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get user by ID and return only the name
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('name'); // only select the 'name' field

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ name: user.name });
    } catch (err) {
        console.error("❌ Error:", err.message);
        res.status(400).json({ error: "Invalid user ID" });
    }
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
