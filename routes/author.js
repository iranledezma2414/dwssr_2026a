//var express = require('express');
import express from 'express';
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('author', {author: 'Irán Ledezma',
    mail: 'iranledezma65@gmail.com',
   });
  
});

//module.exports = router;
export default router;
