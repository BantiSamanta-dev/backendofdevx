 import jwt from 'jsonwebtoken'
 import {secretKey} from '../config.js'


const verifyToken  = (req ,res ,next)=>{
    const token = req.headers.authorization;
    const Token = token.replace('Bearer ', '')
    console.log(Token)
    if(!Token){
        return res.status(401).json({error:'Unauthorized;'})
    }
    try {
        const decoded = jwt.verify(Token, secretKey);
        req.user = decoded; 
        next();
        
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' }); 
    }
}
export default verifyToken







// async function verifyUserToken(req, res, next){
//     try{
        
//     const {authorization} = req.headers;
   
//     const decoded = jwt.verify(authorization, secretKey);
//     console.log(decoded)
//     const user = await User.findOne({userid: decoded.userid});
    
//     if(!user){
//       return res.status(401).json({
//         message: "Unauthorized"
//       })
//     }
//     req.user = user;
//     console.log(req.user)
//     next();
//   } catch {
//     return res.status(401).json({
//       message: "Unauthorized"
//     })
//   }
//   }

//   export default verifyUserToken