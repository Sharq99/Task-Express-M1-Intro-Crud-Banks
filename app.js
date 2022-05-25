const express = require('express');
const accountRoutes = require('./apis/accounts/accounts.routes');

const app = express();

//middleWare
app.use(express.json());

app.use('/api/accounts',accountRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log("This app is running on localhost:"+(PORT)));

