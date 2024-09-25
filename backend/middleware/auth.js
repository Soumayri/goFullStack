const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env.local" });

module.exports = (req, res, next) => {
    
     try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
     const userId = decodedToken.userId;
      req.auth = {
        userId: userId,
     };
    
    console.log(userId)
    console.log(decodedToken)
    next();
   
     } catch (error) {
         res.status(401).json({ message : 'problème ici !' });
     }
};