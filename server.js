const express = require('express');
const lumie = require('lumie');
const Sequelize = require('sequelize');

const app = express();
const port = 3000; // Change the port number as desired
const path = require("path");


// Define your routes using Lumie
lumie.load(app, {
    preURL: '',
    verbose: true,
    ignore: ['*.spec', '*.action', 'helper'],
    controllers_path: path.join(__dirname, 'controllers')
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
