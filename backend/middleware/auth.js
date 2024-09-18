const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env.local" });

module.exports = (req, res, next) => {
    
     try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, '3fded1a1944be33223f59341d9dda27e47bfc9173dea95ec89224a54b46c08a1');
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