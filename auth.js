const jwt = require('jsonwebtoken');


const generateToken = async (name,Project,password) => {
    try {
        return jwt.sign({ name, Project, password }, "9Bcts_2015", { expiresIn: '1h' });
    } catch (error) {
        return null;
    }
}

const verifyToken = async (req,res) => {
        try{
          const token = req.cookies.token;
        console.log("Token:", token);
        if (!token) {
            throw new Error("Token not provided");
        }
    
        const decoded = jwt.verify(token, "9Bcts_2015");
        return decoded;
    
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
}