// Import required modules
import express from 'express';
import connectDB from './DB/index.js';


import cors from 'cors';
import { registerUser, loginUser, updateUser, deleteUser, logoutUser, getUserById, changePassword } from './controllers/userController.js';
import { validateRegistration, validateLogin } from './middilewares/inputValidationMiddleware.js';
import createChallenge from './controllers/challengeController.js';
import verifyToken from './middilewares/authMiddleware.js'
const PORT = 5000

// Initialize Express app
const app = express();

// Middleware to parse JSON data and enable CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
connectDB()
.then(()=>{
    app.listen(PORT ,() =>{console.log(`The server is running on http://localhost:${PORT}`)}
    )
    console.log("database is connected")
})
.catch((error)=>{
    console.log("there is some error in the connection", error)
})


app.post('/register', validateRegistration, registerUser);
app.post('/login', validateLogin, loginUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.post('/logout', logoutUser); 
app.get('/users/:id',  verifyToken, getUserById); 
app.put('/users/:id/change-password',  verifyToken, changePassword); 



// challenge

app.post('/challenges', createChallenge)

;

