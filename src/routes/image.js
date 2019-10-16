module.exports  = function(app) {    
    let image = require('../controller/image');

    app.route('/api/v1/image')
       .get(image.getAll)
       .post(image.append)
       .delete(image.remove)  
       .put(image.update); 
      
};