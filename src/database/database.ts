import mongoose from 'mongoose';

const uri = 'mongodb://localhost/settledb';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err));

mongoose.connection.on("open", _ => {
  console.log("URI: ", uri)
})