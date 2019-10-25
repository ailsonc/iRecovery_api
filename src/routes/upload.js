const upload = require("../config/upload");

module.exports  = function(app) {    

    app.post('/api/v1/upload', upload.single('profile'), function (req, res, next) {
        console.log(req.file.filename)
        console.log(req.body)
    })
};