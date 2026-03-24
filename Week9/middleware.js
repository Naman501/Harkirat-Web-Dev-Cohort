async function  auth(req,res,next) {
       const token=req.headers.token
        if(!token){
             res.status(403).send({
                message:"You are not logged in"
            })
        return;
        }
    
        const decoded=jwt.verify(token,"SECRET123456789")
        const username=decoded.username
    
        if(!username){
            res.status(403).json({
                message:"Malformed Token!"
            })
        return;
        }
        next()
}

module.exports={
    auth
}