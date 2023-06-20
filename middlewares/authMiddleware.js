import JWT from "jsonwebtoken"

const userAuth = async(req,res,next)=>{
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader.split(" ")[1]
        JWT.verify(token, process.env.JWT_SECRET, (error, decode)=>{
            if(error){
                return res.status(404).send({
                    success: false,
                    message: 'Auth failed'
                })
            }else{
                req.body.userId = decode.userId;
                next();
            }

        })
        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: 'Auth failed'
        })
        
    }
}

export default userAuth 