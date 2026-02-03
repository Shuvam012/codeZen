
import jwt  from "jsonwebtoken";



const protect = (req, res, next) => {
    
    const token = req.cookies.token;

    if(!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
        // throw new Error('Not authorized')
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch(error){
        res.status(401).json({ message: 'token is not valid' });

        }
}


export {protect}