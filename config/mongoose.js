const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/recruiter_Portal',{useNewUrlParser: true,useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
  // we're connected!
  console.log("We Are Connected To Db");
});


module.exports = db;