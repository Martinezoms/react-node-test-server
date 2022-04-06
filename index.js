require('dotenv').config();

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./utils/db');

// Database connection
db.authenticate()
  .then(() => console.log(`database connection was successful`))
  .catch((error) => console.log('connection =>', error));

//Middlewares
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));
app.use(bodyParser.json());

// Routes

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is running on port ${port}`));
