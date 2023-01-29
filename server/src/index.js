const express = require('express');
const { use } = require('./routes/index.routes');

const app = express()

require('./configs/database');

app.use(require('./routes/index.routes'));

app.listen(3000);
console.log('Server on port 3000');
