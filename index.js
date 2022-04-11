require('dotenv').config();

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./utils/db');
const userRoutes = require('./routes/user');
const sectorRoutes = require('./routes/sector');
const divisionRoutes = require('./routes/division');
const groupRoutes = require('./routes/group');
const classRoutes = require('./routes/class');

// Database connection
db.authenticate()
  .then(() => console.log(`database connection was successful`))
  .catch((error) => console.log('connection =>', error));

//Middlewares
app.use(cors({ credentials: true, origin: `http://localhost:3000` }));
app.use(bodyParser.json());

// API Routes
app.use('/user', userRoutes);
app.use('/sector', sectorRoutes);
app.use('/division', divisionRoutes);
app.use('/group', groupRoutes);
app.use('/class', classRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is running on port ${port}`));
