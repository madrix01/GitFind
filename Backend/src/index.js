const express= require("express");
const dotenv = require("dotenv");

const app = express();
// Routes
const authRoute = require('./Routes/auth');

dotenv.config();

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET


app.use('/api', authRoute);
app.use(express.json());
  
app.listen(6969, () => {
    console.log('Ayy Ayy captain');
});  