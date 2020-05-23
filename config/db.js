const mongoose = require('mongoose');
const DB_URL = "localhost:8081/express-crud";

// connect to mongodb
const connectToDB = () => {
    mongoose.connect(`mongodb://${DB_URL}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    )
      .then(() => {      
        console.log("MongoDB connected")
      })
      .catch(err => console.log(err))
    mongoose.Promise = global.Promise;
  }
  module.exports = {
    connectToDB
  }