
/**
 * Patern for middleware functions
 * app.use((req, res, next) => {
 * DO SOMETHING
 * next()
 * }) 
*/

/**
 * IMPORTS
 * ****************
 */

const express = require('express');
// handle cross origin request
const cors = require('cors');
// creates universal path 
const path = require('path');
// nice detailed output of request
const morgan = require('morgan');

/**
 * CONST
 */
const router = require('./routes/prototype.router')
const app = express();

/**
 * MIDLEWARES
 * **************** 
 */
//first middleware should be the security one
 app.use(cors({
    origin: 'http://localhost:3000',
}));

// middleware FUNCTIONS
app.use(morgan('combined'))

//creates body.params
app.use(express.json());

//allows server to serve static content which is in public dir
//public dir contains a minimized version of front-end which can be build with script npm run build in client dir 
app.use(express.static(path.join(__dirname, '..', 'public')))
//

//middleware ROUTES 
//if add route param, i don't have to type the full route in router file, i can just type '/' = /route/ 
app.use(/*route, */router)

//allows frontend to serve all paths which doesn't match paths which i defined in my routers 
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));   
})
//

/**
 * EXPORT
 */
module.exports = app
