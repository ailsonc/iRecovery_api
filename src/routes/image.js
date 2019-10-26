module.exports  = function(app) {    
    let upload = require("../config/upload");
    let image = require('../controller/image');

    app.post('/api/v1/image', upload.single('profile'), image.append);
    app.put('/api/v1/image/:id', upload.single('profile'), image.update);

    app.route('/api/v1/image')
       .get(image.getAll);

    app.route('/api/v1/image/:id')
       .get(image.getById)
       .delete(image.remove);    

    app.route('/api/image')
       .get(image.getAll);
      
};