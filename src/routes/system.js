module.exports  = function(app) {    
    let system = require('../controller/system');

    app.route('/api/v1/system')
       .get(system.getAll)
       .post(system.append);   
      
    app.route('/api/v1/system/:id')
       .get(system.getById)
       .put(system.update)
       .delete(system.remove);
};