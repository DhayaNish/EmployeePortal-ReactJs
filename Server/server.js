

 const express = require("express");
 // const bodyParser = require("body-parser"); /* deprecated */
 const cors = require("cors");
 const bodyParser = require('body-parser');
 
 const app = express();
 app.use(cors())
 
 // parse requests of content-type - application/json
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 
 
 // Configuring the database
 const dbConfig = require('./db/index.js');
 const mongoose = require('mongoose');
 
 mongoose.Promise = global.Promise;
 
 // Connecting to the database
 const db = require("./db/server");
 db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(() => {
     console.log("Connected to the database!");
   })
   .catch((err) => {
     console.log("Cannot connect to the database!", err);
     process.exit();
   });
   require("./routes/user-route")(app);

 // listen for requests
 const PORT = process.env.PORT || 8080;
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
 });