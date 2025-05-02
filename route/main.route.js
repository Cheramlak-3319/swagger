const express = require('express');
const dubeRoute = require('./dube.route.js');
const wfpRoute = require('./wfp.route.js');
const verifyToken = require('../config/token.generate.js')

const router = express.Router();

const verifyWfpToken = async (req, res, next) => {
    const user = await verifyToken(req, res);
    console.log(user);
    if (user && user.Project === 'WFP') {
      req.user = user;
      return next();
    }
    return null;
  };


router.use('/dube',verifyWfpToken, dubeRoute);
router.use('/WFP',verifyWfpToken, wfpRoute);
module.exports = router;
