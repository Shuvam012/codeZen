
import jwt  from "jsonwebtoken";





// const protect = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { _id: decoded.id, role: decoded.role }; // always set _id
//     next();
//   } catch (err) {
//     console.error("Protect middleware error:", err);
//     return res.status(401).json({ message: "Token is not valid" });
//   }
// };
const protect = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    console.error("Protect Middleware Error:", err);
    return res.status(401).json({ message: "Token is not valid" });
  }
};









export {protect}