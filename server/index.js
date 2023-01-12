require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT;

app.listen(port, function () { console.log(`Server run on ${port} port`) });
