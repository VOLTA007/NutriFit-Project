import { createRouter } from "next-connect";
import dbConnectLogin from "@/utils/dbConnectLogin";
import UserLogin from "@/models/UserLogin";
import bcrypt from "bcrypt"

dbConnectLogin();

const router = createRouter()
.post(async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the email already exists in the database
      const existingUser = await UserLogin.findOne({ email });
  
      if (existingUser) {
        // If the user already exists, return an error
        return res.status(401).json({ success: false, message: 'User already exists' });
      }
  
      // Create a new user object with the email and hashed password
      const newUser = new UserLogin({
        email,
        password
      });
  
      // Save the new user to the database
      await newUser.save();
  
      // Send a success response
      res.status(200).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      // If an error occurs, send a 500 Internal Server Error response
      console.error('Error registering user:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  })
  

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});