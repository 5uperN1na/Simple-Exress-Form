const express = require('express');
const path = require('path');
const { doesNotMatch } = require('assert');
const { getMaxListeners } = require('process');
const members = require('./Members');
// const logger = require('./middleware/logger');

const app = express();


// //Init middleware
// app.use(logger);

//Get for single member
app.get('/api/members/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));

});


//Gets all members
app.get('/api/members', (req, res) => res.json(members));

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));