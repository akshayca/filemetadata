var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app){
  app.route('/upload').post(upload.single('avatar'), function(req, res){
    res.send( { "size" : req.file.size } );
  });
}