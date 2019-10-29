const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('./cors'),
      auth = require('../routes/auth'),
      image = require('../routes/image'),
      system = require('../routes/system'),
      user = require('../routes/user'),
      app = express();

app.set("port", (process.env.PORT || 5000));    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

// Statics
app.use('/', express.static('admin'));
app.use('/jnlp', express.static('jnlp'));
app.use('/uploads', express.static('uploads'));

// Disable x-powered-by from header
app.disable('x-powered-by');

// Routes
auth(app);
image(app);
system(app);
user(app);

module.exports = app;