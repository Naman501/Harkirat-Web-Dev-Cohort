const jwt=require("jsonwebtoken")


const authMiddleware=async (req,res,next)=>{
    try {
        const authHeader=req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success:"false"
,                message:"No tokens provided"
            })
        }
        console.log("Auth- header:",authHeader)
        const token=authHeader.split(" ")[1];

        const decoded=jwt.verify(token,
            "secretKey"
        )
        console.log("decoded",decoded)
        req.user=decoded;
        next();
    } catch (error) {
        console.log(error)
         return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
    }
}

module.exports={authMiddleware}