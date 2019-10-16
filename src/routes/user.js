module.exports  = function(app) {    
    let user = require('../controller/user');

    app.route('/api/v1/user')
       .get(user.getAll)
       .post(user.append)
       .delete(user.remove)  
       .put(user.update); 
};