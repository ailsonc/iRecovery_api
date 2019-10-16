module.exports  = function(app) {    

    let auth = require('../controller/auth');

    app.route('/api')
       .get((req, res) => { res.send('iRecovery version 1'); });

    app.route('/api/v1/authentication')  
       .post(auth.authentication); 

    app.use('/api/v1/*', auth.requireAuthentication); 
};