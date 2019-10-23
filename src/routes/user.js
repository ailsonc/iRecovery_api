module.exports  = function(app) {    
    let user = require('../controller/user');

    app.route('/api/v1/user')
       .get(user.getAll)
       .post(user.append); 

    app.route('/api/v1/user/:id')
       .get(user.getById)
       .put(user.update)
       .delete(user.remove); 
};