const multer  = require('multer')
     ,storage = multer.diskStorage({
        destination: 'uploads/',
        filename: function (req, file, cb) {
          cb(null, Date.now() + '.'+ file.mimetype.split('/')[1])
        }
      });
module.exports = multer({ storage: storage });