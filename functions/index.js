const express = require('express');
const User = require('../model/db.model.js')
const dbConnect = require('../config/db.connect.js')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi =require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const {generateToken} = require('../auth.js')
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = 5000;

app.post('/create',async(req,res,next)=>{
  const {name,Project,password} = req.body;
  try {
    const findUser = await User.findOne({name})


    if(findUser){
      res.status.json({
        message: "user already exist"
      })
    }

    const newUser = await User.create({
      name:name,
      password:password,
      Project:Project
    })

    res.json({
      User: newUser
    })
  } catch (error) {
    
  }
})

// Updated login route
app.post('/login', async(req, res,next) => {
  try {
    const { name, password, Project} = req.body;
    const findUser = await User.findOne({name});
    const token = await generateToken(name, Project, password);

    res.cookie('token', token,{
      httpOnly: true
    })

    res.json({
      findUser:findUser,
      token: token
    })
  } catch (err) {
    if (req.accepts('html')) {
      return res.redirect(`/?error=${encodeURIComponent(err.message)}`);
    }
    res.status(401).json({
      success: false,
      error: err.message
    });
  }
});



const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: "HellOOpass API documentation",
      description: "API documentation for HellOOpass platform with JWT authentication",
      version: "1.0.11",
    },
    servers: [
      {
        url: "https://helloomarket.com/api",
        description: "Production server",
      },
      {
        url: "http://localhost:5000",
        description: "Local development server",
      }
    ],
  },
  apis: ['./route/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));


dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api/api-docs`);
});
