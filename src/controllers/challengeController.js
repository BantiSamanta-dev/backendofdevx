
import Challenge from "../models/challenge.m.js"





export const createChallenge = async(req,res)=>{
    try {
       
        const {title , description , difficulty ,category , points ,metadata} = req.body
        const adminId = req.user.userId;
        console.log('User ID:', adminId);

        const newChallenge = new Challenge({
            title,
            description,
            category,
            difficulty,
            points,
            metadata,
            createdBy: adminId,
        })
        //save 

       await newChallenge.save()
       res.status(201).json({message:'Challenge creation successfull'})  
      } catch (error) {
        console.error(error)
        res.status(500).json({error:'internal server error'})

        
    }
}

export default createChallenge;