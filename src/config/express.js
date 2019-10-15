const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('./cors'),
      auth = require('../routes/auth');
      image = require('../routes/image');
      user = require('../routes/user');
      app = express();

app.set("port", (process.env.PORT || 5000));    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

// JAVA JNLP
app.use('/', express.static('public'));

// Disable x-powered-by from header
app.disable('x-powered-by');

// Routes
auth(app);
image(app);
user(app);

module.exports = app;