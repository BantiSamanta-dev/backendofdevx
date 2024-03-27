import User from '../models/user.m.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import{secretKey} from '../config.js'

export const registerUser = async (req, res) => {
  

  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      // const { username, email, password, fullName, bio, isAdmin } = req.body;

    const { username, email, password, fullName, bio , roles} = req.body;

    console.log(req.body.roles)
     

      // if (typeof roles !== 'boolean') {
      //   return res.status(400).json({ error: 'roles must be a boolean value' });
      // }

      // Check if the requester is an admin
      if (roles && req.body.roles.includes('admin')) {
          return res.status(403).json({ error: 'Admin users cannot create other admin users' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      
      // Create new user
      const newUser = new User({
          username,
          email,
          passwordHash,
          roles,
          // roles: isAdmin ? ['admin'] : ['user'], 
          fullName,
          bio,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};
///login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

 
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

 
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { username, email, fullName, bio, roles } = req.body; // Include roles in the destructuring

    const userId = req.params.id; 
    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user fields
    user.username = username;
    user.email = email;
    user.fullName = fullName;
    user.bio = bio;
    
    // Check if roles is provided in the request body
    if (roles) {
      user.roles = roles; // Update roles only if it's provided in the request
    }

    await user.save();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; 

 
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.remove();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// get all users 

export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id; 
  
      const user = await User.findById(userId);
      console.log(user)
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const logoutUser = async (req, res) => {
    try {
      
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const changePassword = async (req, res) => {
    try {
      const userId = req.params.id; 
      const { oldPassword, newPassword } = req.body;
      
      console.log(req.body.user)
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(oldPassword, user.passwordHash);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid old password' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(newPassword, salt);
  
      user.passwordHash = passwordHash;
      await user.save();
  
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
