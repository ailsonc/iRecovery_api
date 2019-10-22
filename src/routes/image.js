module.exports  = function(app) {    
    let image = require('../controller/image');

    app.route('/api/v1/image')
       .get(image.getAll)
       .post(image.append);

   app.route('/api/v1/image/:id')
       .get(image.getById)
       .put(image.update)
       .delete(image.remove);    

    app.route('/api/image')
       .get(image.getAll);
      
};