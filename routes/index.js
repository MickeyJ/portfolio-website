var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', 
    {
      title: 'Home',
      description: `Home description`
    }
  );
});

router.get('/htm', function(req, res, next) {
  res.render('htm',
    {
      title: "image",
      description: `image page`,
      image: req.query.image
    }
  );
});

router.get('/contact', function(req, res){
  res.render('contact', 
    {
      title: "Contact",
      description: `Contact description`
    }
  );
});

module.exports = router;
