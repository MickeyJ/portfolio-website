require('dotenv').load();
var express = require('express');
var router = express.Router();

const sendgrid = require('sendgrid').SendGrid(process.env.SENDGRID_API);

router.get('/', (req, res, next) =>{
  res.render('index', 
    {
      title: 'Projects',
      description: `Projects description`
    }
  );
});

router.get('/me', (req, res, next) =>{
  res.render('me',
    {
      title: "About Me",
      description: `about me page`,
      image: ''
    }
  );
});

router.get('/contact', (req, res)=>{
  res.render('contact', 
    {
      title: "Contact",
      description: `Contact description`
    }
  );
});

router.post('/api/contact', (req, res)=>{

  // console.log(req.body);
  
  const payload = {
    to      : process.env.EMAIL,
    from    : req.body.email,
    subject : 'Email From Personal Website',
    text    : `From: ${req.body.name} \n ${req.body.message}`
  }

  sendgrid.send(payload, (err, json) => {
    console.log(payload);
    if (err) {
      console.error('sendgrid error in sendEmail router', err);
      res.status(503).json({error: err, error_message: "Form fields not filled out correctly"});
    } else {
      console.log(json);
      res.status(200).json(json);
    }
  });
});


module.exports = router;
