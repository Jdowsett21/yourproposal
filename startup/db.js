const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log(`Connected to the ${process.env.MONGODB_URL}`))
    .catch((err) => console.log(err));

  mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
  });
};
