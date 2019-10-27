module.exports  = function(app) {    
    let upload = require("../config/upload")
       ,image = require('../controller/image');

    app.post('/api/v1/image', upload.single('profile'), image.append);

    app.route('/api/v1/image')
       .get(image.getAll);

    app.route('/api/v1/image/:id')
       .get(image.getById)
       .put(image.update)
       .delete(image.remove);    

    app.route('/api/image')
       .get(image.getAll);
      
};