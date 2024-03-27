import User from '../models/user.m.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import{secretKey} from '../config.js'



const registerUser = async(req,res)=>{
    try {

        //  Get all data from body 

        const {username , email , password ,fullName , bio , roles} = req.body

        if(req.body.roles.includes('admin')){
            return res.status(403).json({error: 'Admin user cannot create other admin'})
        }

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password,salt)

        // create the user 

        const newUser = new User({
            username,
            email,
            passwordHash,
            roles,
            fullName,
            bio
        })
        // save the user

        await newUser.save()
        res.status(201).json({ massage: 'User registerd successfull'})

        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Internal server Error'})
        
    }
}