const express = require('express')

const app = express()

require('./configs/database');

app.listen(3000);

console.log('Server on port 3000');
