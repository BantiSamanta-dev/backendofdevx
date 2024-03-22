
import Joi from 'joi'


const validateRegistration = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        fullName: Joi.string().required(),
        bio: Joi.string(),
       roles: Joi.string()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};


//login 


const validateLogin = (req ,res,next)=>{
    const schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()

}


// challenge create


const validateChallengeCreation =(req,res,next)=>{
    const schema = Joi.object({
        title:Joi.string().required(),
        discription:Joi.string().required(),
        difficulty:Joi.string().valid('easy','medium','hard').required(),
        catergory:Joi.string().required(),
        points:Joi.number().integer().min(0).required(),
        metadate:Joi.string()

    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}

// post creation 



const validatePostCreation = (req,res,next)=>{
    const schema = Joi.object({
        title:Joi.string().required(), // need to validate the length!!!!
        content:Joi.string().required(),
        tags:Joi.string().required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()

}


// comment creation 


const validateCommentCreation =(req,res,next)=>{
    const schema  = Joi.object({
        content: Joi.string().min(1).max(500).required(),
        postId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}

// event 

const validateEventCreation =(req,res,next)=>{
    const schema = Joi.object({
        title: Joi.string().min(5).max(300).required(),
        description : Joi.string().min(1).max(500).required(),
        startDate: Joi.date().iso().required(),
        endDate: Joi.date().iso().min(Joi.ref('startDate')).required(),
        location: Joi.string().required(),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}

//codesnippet

const validateCodeSnippetCreation = (req,res,next)=>{
    const schema = Joi.object({
    language: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().min(1).required(),
    author: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()).min(1).required(),

    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}

// projectIdea

const validateProjectIdeaCreation =(req,res,next)=>{
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(), // Assuming author is the user's ID
        tags: Joi.array().items(Joi.string()), // Assuming tags are strings
        visibility: Joi.string().valid('public', 'private').default('public'),
        status: Joi.string().valid('pending', 'inProgress', 'completed').default('pending'),
        images: Joi.array().items(Joi.string()), // Assuming images are URLs
        attachments: Joi.array().items(Joi.string()), // Assuming attachments are URLs
        ratings: Joi.array().items(Joi.object({
          user: Joi.string().required(),
          rating: Joi.number().min(1).max(5).required(),
        })),
        contributors: Joi.array().items(Joi.string())
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}


// team creation 

const validateTeamCreation =(req,res,next)=>{
    const schema   =  Joi.object({
      name: Joi.string().required(),
      description: Joi.string(),
      communicationChannels: Joi.array().items(Joi.string()),
      versionControl: Joi.string(),
      pairProgrammingTools: Joi.array().items(Joi.string()),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()


}

//notification


const validateNotification =()=>{
    const schema = Joi.object({
        recipient: Joi.string().required(), // Assuming recipient is the user's ID
        message: Joi.string().required(),
        type: Joi.string().valid('info', 'warning', 'success', 'error').default('info'),
        status: Joi.string().valid('unread', 'read').default('unread'),
        trigger: Joi.string().required(), 
        action: Joi.string(),
        metadata: Joi.object().unknown(true),
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).json({
            error:error.details[0].message
        })
    }
    next()
}

export {validateChallengeCreation ,validateCodeSnippetCreation ,validateCommentCreation,validateEventCreation,validateLogin,validateNotification,validatePostCreation,validateProjectIdeaCreation,validateRegistration,validateTeamCreation}




