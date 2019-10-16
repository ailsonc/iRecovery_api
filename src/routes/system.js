module.exports  = function(app) {    
    let system = require('../controller/system');

    app.route('/api/v1/system')
       .get(system.getAll)
       .post(system.append)
       .delete(system.remove)  
       .put(system.update); 
      
};