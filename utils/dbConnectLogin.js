const mongoose = require('mongoose');

export default async function dbConnectLogin() {
    try {
        await mongoose.connect('mongodb+srv://volta0007:X5913lock1@cluster0.l8jlgt1.mongodb.net/UserLogin',
        { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
